import express from 'express'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const PORT = parseInt(process.env.PORT || '3005', 10)
const PAYLOAD_URL = process.env.PAYLOAD_URL || 'http://localhost:4005'

async function createServer() {
  const app = express()
  app.use(cookieParser())
  app.use(express.json())

  let vite: any

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets'), { maxAge: '1y' }))
  }

  // Serve static public files
  app.use(express.static(path.resolve(__dirname, '../../public'), { index: false }))

  // Revalidation endpoint (called by CMS hooks)
  app.post('/api/revalidate', async (req, res) => {
    const secret = process.env.REVALIDATION_SECRET
    const auth = req.headers.authorization

    if (secret && (!auth || auth !== `Bearer ${secret}`)) {
      return res.status(403).json({ ok: false, error: 'Invalid revalidation secret' })
    }

    const { path: pathToInvalidate, tag } = req.body || {}
    const { invalidateByPath, invalidateByTag } = await import('./src/lib/cache')

    let count = 0
    if (pathToInvalidate) count += invalidateByPath(pathToInvalidate)
    if (tag) count += invalidateByTag(tag)

    res.json({ ok: true, invalidated: count })
  })

  // Client-side page data endpoint — used by React app for SPA navigation
  app.get('/api/page-data', async (req, res) => {
    const url = (req.query.url as string) || '/'
    const draft = req.cookies?.['payload-draft'] === 'true'
    try {
      const { fetchPageData } = await (isProduction
        ? import('./src/data-loader.ts')
        : vite.ssrLoadModule('/src/data-loader.ts'))
      const data = await fetchPageData(url, { draft, payloadUrl: PAYLOAD_URL })
      res.json(data)
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  })

  // Preview mode
  app.get('/api/preview', (req, res) => {
    const { secret, slug, collection } = req.query
    if (secret !== process.env.PREVIEW_SECRET) {
      return res.status(403).json({ error: 'Invalid preview secret' })
    }

    res.cookie('payload-draft', 'true', { httpOnly: true, sameSite: 'lax', path: '/' })
    const redirectPath = collection === 'posts' ? `/posts/${slug}` : collection === 'services' ? `/services/${slug}` : `/${slug || ''}`
    res.redirect(redirectPath)
  })

  app.get('/api/exit-preview', (req, res) => {
    res.clearCookie('payload-draft', { path: '/' })
    res.redirect('/')
  })

  // ─── Portal API Routes ────────────────────────────────────────────────────

  const { portalConfig } = await import('./src/lib/portal-config.js')
  const {
    isPortalCredentialValid,
    createPortalSessionToken,
    getPortalCookieOptions,
    getPortalSession,
  } = await import('./src/lib/portal-auth.js')
  const {
    listAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentById,
    listEmailLogs,
    createEmailLog,
  } = await import('./src/lib/portal-storage.js')
  const { sendPortalEmail } = await import('./src/lib/portal-email.js')
  const {
    createGoogleCalendarEvent,
    updateGoogleCalendarEvent,
    deleteGoogleCalendarEvent,
  } = await import('./src/lib/google-calendar.js')

  // Helper: get session from request
  const getSession = (req: express.Request) => getPortalSession(req.cookies as Record<string, string>)

  // Auth: Login
  app.post('/api/portal/auth/login', async (req, res) => {
    const { username = '', password = '' } = req.body as { username?: string; password?: string }
    if (!isPortalCredentialValid(username.trim(), password)) {
      return res.status(401).json({ error: 'Invalid username or password.' })
    }
    const opts = getPortalCookieOptions()
    res.cookie(portalConfig.cookieName, createPortalSessionToken(username.trim()), opts)
    res.json({ ok: true })
  })

  // Auth: Logout
  app.post('/api/portal/auth/logout', (req, res) => {
    res.clearCookie(portalConfig.cookieName, { path: '/' })
    res.json({ ok: true })
  })

  // Auth: Session check
  app.get('/api/portal/auth/session', (req, res) => {
    const session = getSession(req)
    res.json({ authenticated: Boolean(session), username: session?.username || null })
  })

  // Appointments: list + create
  app.get('/api/portal/appointments', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })
    res.json({ appointments: await listAppointments() })
  })

  app.post('/api/portal/appointments', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })

    const { title, clientName, clientEmail, startAt, endAt, notes } = req.body as Record<string, string>
    if (!title || !clientName || !startAt || !endAt) {
      return res.status(400).json({ error: 'Title, client name, start time, and end time are required.' })
    }

    const start = new Date(startAt)
    const end = new Date(endAt)
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
      return res.status(400).json({ error: 'End time must be after start time.' })
    }

    const appointment = await createAppointment({ title, clientName, clientEmail: clientEmail || '', startAt, endAt, notes: notes || '' })

    try {
      const googleEvent = await createGoogleCalendarEvent(appointment)
      const synced = await updateAppointment(appointment.id, {
        googleEventId: googleEvent.status === 'synced' ? googleEvent.eventId : undefined,
        googleEventLink: googleEvent.status === 'synced' ? googleEvent.eventLink : undefined,
        googleSyncStatus: googleEvent.status,
        googleSyncError: googleEvent.status === 'skipped' ? (googleEvent as any).error : undefined,
      })
      return res.json({ appointment: synced || appointment })
    } catch (err) {
      const failed = await updateAppointment(appointment.id, {
        googleSyncStatus: 'failed',
        googleSyncError: err instanceof Error ? err.message : 'Unable to sync to Google Calendar.',
      })
      return res.json({ appointment: failed || appointment })
    }
  })

  // Appointments: update + delete by ID
  app.patch('/api/portal/appointments/:id', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })

    const current = await getAppointmentById(req.params.id)
    if (!current) return res.status(404).json({ error: 'Appointment not found.' })

    const body = req.body as Record<string, string | undefined>
    const proposed = {
      ...current,
      title: body.title !== undefined ? body.title.trim() : current.title,
      clientName: body.clientName !== undefined ? body.clientName.trim() : current.clientName,
      clientEmail: body.clientEmail !== undefined ? body.clientEmail.trim() : current.clientEmail,
      startAt: body.startAt ?? current.startAt,
      endAt: body.endAt ?? current.endAt,
      notes: body.notes !== undefined ? body.notes.trim() : current.notes,
      status: (body.status as 'confirmed' | 'cancelled') ?? current.status,
    }

    if (!proposed.title || !proposed.clientName || !proposed.startAt || !proposed.endAt) {
      return res.status(400).json({ error: 'Title, client name, start time, and end time are required.' })
    }

    const start = new Date(proposed.startAt)
    const end = new Date(proposed.endAt)
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
      return res.status(400).json({ error: 'End time must be after start time.' })
    }

    const appointment = await updateAppointment(req.params.id, {
      title: body.title !== undefined ? body.title.trim() : undefined,
      clientName: body.clientName !== undefined ? body.clientName.trim() : undefined,
      clientEmail: body.clientEmail !== undefined ? body.clientEmail.trim() : undefined,
      startAt: body.startAt,
      endAt: body.endAt,
      notes: body.notes !== undefined ? body.notes.trim() : undefined,
      status: body.status as 'confirmed' | 'cancelled' | undefined,
    })

    if (!appointment) return res.status(404).json({ error: 'Appointment not found.' })

    try {
      const googleEvent = await updateGoogleCalendarEvent(appointment)
      const synced = await updateAppointment(appointment.id, {
        googleEventId: googleEvent.status === 'synced' ? googleEvent.eventId : appointment.googleEventId,
        googleEventLink: googleEvent.status === 'synced' ? googleEvent.eventLink : appointment.googleEventLink,
        googleSyncStatus: googleEvent.status,
        googleSyncError: googleEvent.status === 'skipped' ? (googleEvent as any).error : undefined,
      })
      return res.json({ appointment: synced || appointment })
    } catch (err) {
      const failed = await updateAppointment(appointment.id, {
        googleSyncStatus: 'failed',
        googleSyncError: err instanceof Error ? err.message : 'Unable to sync to Google Calendar.',
      })
      return res.json({ appointment: failed || appointment })
    }
  })

  app.delete('/api/portal/appointments/:id', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })

    const appointment = await getAppointmentById(req.params.id)
    if (!appointment) return res.status(404).json({ error: 'Appointment not found.' })

    try { await deleteGoogleCalendarEvent(appointment) } catch {}

    const deleted = await deleteAppointment(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Appointment not found.' })

    res.json({ ok: true })
  })

  // Email: list + send
  app.get('/api/portal/email', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })
    res.json({ logs: await listEmailLogs() })
  })

  app.post('/api/portal/email', async (req, res) => {
    if (!getSession(req)) return res.status(401).json({ error: 'Unauthorized.' })

    const { to, subject, body: message } = req.body as { to?: string; subject?: string; body?: string }
    const toStr = to?.trim() || ''
    const subjectStr = subject?.trim() || ''
    const messageStr = message?.trim() || ''

    if (!toStr || !subjectStr || !messageStr) {
      return res.status(400).json({ error: 'To, subject, and message are required.' })
    }

    try {
      await sendPortalEmail({ to: toStr, subject: subjectStr, body: messageStr })
      const log = await createEmailLog({ to: toStr, subject: subjectStr, body: messageStr, status: 'sent', sentAt: new Date().toISOString() })
      return res.status(201).json({ log })
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : 'Failed to send email.'
      const log = await createEmailLog({ to: toStr, subject: subjectStr, body: messageStr, status: 'failed', error: errMsg })
      return res.status(500).json({ error: errMsg, log })
    }
  })

  // Portal page auth middleware — redirect to /login if not authenticated
  const PROTECTED_PORTAL_ROUTES = ['/dashboard', '/calendar', '/email']
  app.use((req, res, next) => {
    if (PROTECTED_PORTAL_ROUTES.some(route => req.path === route || req.path.startsWith(route + '/'))) {
      if (!getSession(req)) {
        return res.redirect('/login')
      }
    }
    next()
  })

  // ─── SSR handler ──────────────────────────────────────────────────────────

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      let template: string
      let render: any

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        render = (await import('./dist/server/entry-server.js')).render
      }

      const draft = req.cookies['payload-draft'] === 'true'

      // Fetch page data on the server
      const { fetchPageData } = await (isProduction
        ? import('./src/data-loader.ts')
        : vite.ssrLoadModule('/src/data-loader.ts'))

      const pageData = await fetchPageData(url, { draft, payloadUrl: PAYLOAD_URL })

      const { html: appHtml, helmet } = render(url, { draft, data: pageData })

      // Build head tags from helmet
      const headTags = [
        helmet?.title?.toString() || '',
        helmet?.meta?.toString() || '',
        helmet?.link?.toString() || '',
      ].filter(Boolean).join('\n')

      const dataScript = `<script>window.__INITIAL_DATA__ = ${JSON.stringify(pageData)}</script>`
      const finalHtml = template
        .replace('<!--head-tags-->', headTags + '\n' + dataScript)
        .replace('<!--ssr-outlet-->', appHtml)

      // Set status code based on page data
      const status = pageData?.notFound ? 404 : 200
      res.status(status).set({ 'Content-Type': 'text/html' }).end(finalHtml)
    } catch (e: any) {
      if (!isProduction) vite?.ssrFixStacktrace(e)
      console.error(e.stack)
      res.status(500).end(e.stack)
    }
  })

  app.listen(PORT, () => {
    console.log(`[web] Vite SSR server running at http://localhost:${PORT}`)
    console.log(`[web] Payload CMS at ${PAYLOAD_URL}`)
  })
}

createServer()
