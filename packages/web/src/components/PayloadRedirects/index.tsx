import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface Props {
  disableNotFound?: boolean
  url: string
  redirects?: any[]
}

export const PayloadRedirects: React.FC<Props> = ({ disableNotFound, url, redirects = [] }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const redirectItem = redirects.find((r: any) => r.from === url)
    if (redirectItem) {
      if (redirectItem.to?.url) {
        window.location.href = redirectItem.to.url
        return
      }
      const ref = redirectItem.to?.reference
      if (ref?.value) {
        const slug = typeof ref.value === 'object' ? ref.value.slug : ref.value
        const prefix = ref.relationTo !== 'pages' ? `/${ref.relationTo}` : ''
        navigate(`${prefix}/${slug}`, { replace: true })
      }
    }
  }, [url, redirects, navigate])

  if (disableNotFound) return null
  return null // 404 handled at server level
}
