import { Helmet } from 'react-helmet-async'

import { CalendarManager } from '@/components/victor/CalendarManager'
import { PortalShell } from '@/components/victor/PortalShell'

export default function CalendarPage() {
  return (
    <PortalShell
      current="calendar"
      subtitle="This calendar is the live booking surface for Victor testing. New appointments appear instantly and can be reviewed by day and by month."
      title="Appointment Management Calendar"
    >
      <Helmet>
        <title>Calendar — Victor Portal</title>
      </Helmet>
      <CalendarManager />
    </PortalShell>
  )
}
