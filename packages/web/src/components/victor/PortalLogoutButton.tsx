import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { portalApi } from '@/lib/portal-client'

export function PortalLogoutButton() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  return (
    <Button
      disabled={submitting}
      onClick={async () => {
        setSubmitting(true)

        try {
          await fetch(portalApi('/auth/logout'), {
            method: 'POST',
          })
          navigate('/login', { replace: true })
        } finally {
          setSubmitting(false)
        }
      }}
      variant="outline"
    >
      {submitting ? 'Signing out...' : 'Log out'}
    </Button>
  )
}
