import { CalendarManager } from '@/components/victor/CalendarManager'
import { PortalShell } from '@/components/victor/PortalShell'
import { requirePortalSession } from '@/lib/portal-auth'

export default async function CalendarPage() {
  await requirePortalSession()

  return (
    <PortalShell
      current="calendar"
      subtitle="This calendar is the live booking surface for Victor testing. New appointments appear instantly and can be reviewed by day and by month."
      title="Appointment Management Calendar"
    >
      <CalendarManager />
    </PortalShell>
  )
}
