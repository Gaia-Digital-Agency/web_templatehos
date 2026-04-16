import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/victor/LoginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { portalApi } from '@/lib/portal-client'

export default function LoginPage() {
  const navigate = useNavigate()

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    fetch(portalApi('/auth/session'))
      .then((r) => r.json())
      .then((data: { authenticated: boolean }) => {
        if (data.authenticated) navigate('/dashboard', { replace: true })
      })
      .catch(() => {})
  }, [navigate])

  return (
    <main className="min-h-[calc(100vh-9rem)] bg-[radial-gradient(circle_at_top,#f8e1b5_0%,#f7f2e7_35%,#ffffff_72%)]">
      <Helmet>
        <title>Log in — Victor Portal</title>
      </Helmet>
      <section className="container grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8a6b3f] uppercase">Victor Skills</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#1d140d] md:text-6xl">
            Calendar management and email operations in one testing portal.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[#5a4631] md:text-lg">
            This site is the live testing environment for Victor&apos;s workflow. It lets the booking manager create appointments, review them on the calendar, and send email before the team is onboarded.
          </p>
        </div>

        <Card className="border-black/5 bg-white/90 shadow-[0_30px_80px_rgba(65,47,25,0.12)]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Use the Victor portal credentials to access the booking tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
