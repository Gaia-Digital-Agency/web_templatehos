import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { payloadClient } from '@/lib/payload-client'
import { Media } from '@/components/Media'

// Type definition for the ServicesBlock component properties
export type ServicesBlockType = {
  blockType: 'servicesBlock'
  title?: string
  description?: string
}

// Component that renders the Services section with service cards linking to details
export const ServicesBlock: React.FC<ServicesBlockType> = ({
  title,
  description,
}) => {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    payloadClient
      .find('services', {
        limit: 100,
        sort: 'createdAt',
      })
      .then((result) => {
        setServices(result.docs)
      })
      .catch((err) => {
        console.error('Failed to fetch services:', err)
      })
  }, [])

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl mb-12">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service: any, i: number) => (
          <Link
            key={i}
            to={`/services/${service.slug}`}
            className="flex flex-col gap-4 border border-border p-6 rounded-lg hover:shadow-md transition-shadow group"
          >
            <div className="aspect-video relative overflow-hidden rounded-md mb-4">
              <Media resource={service.image} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
