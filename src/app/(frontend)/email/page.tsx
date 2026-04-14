import { EmailManager } from '@/components/victor/EmailManager'
import { PortalShell } from '@/components/victor/PortalShell'
import { requirePortalSession } from '@/lib/portal-auth'

export default async function EmailPage() {
  await requirePortalSession()

  return (
    <PortalShell
      current="email"
      subtitle="Compose, send, and review messages from the same portal. Activity is logged here so the live test environment stays auditable."
      title="Email Operations"
    >
      <EmailManager />
    </PortalShell>
  )
}
