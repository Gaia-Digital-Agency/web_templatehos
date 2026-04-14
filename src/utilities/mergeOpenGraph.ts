import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

// Default OpenGraph metadata configuration
const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Victor Service helps manage appointments, bookings, and client email communication.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Victor Service',
  title: 'Victor Service',
}

// Merges provided OpenGraph metadata with the default configuration
export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
