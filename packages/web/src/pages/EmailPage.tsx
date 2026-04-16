import { Helmet } from 'react-helmet-async'

import { EmailManager } from '@/components/victor/EmailManager'
import { PortalShell } from '@/components/victor/PortalShell'

export default function EmailPage() {
  return (
    <PortalShell
      current="email"
      subtitle="Compose, send, and review messages from the same portal. Activity is logged here so the live test environment stays auditable."
      title="Email Operations"
    >
      <Helmet>
        <title>Email — Victor Portal</title>
      </Helmet>
      <EmailManager />
    </PortalShell>
  )
}
