import { getServerSideURL, getPayloadURL } from './getURL'

const getImageURL = (image?: any) => {
  const payloadUrl = getPayloadURL()
  let url = getServerSideURL() + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url
    url = ogUrl ? payloadUrl + ogUrl : payloadUrl + image.url
  }
  return url
}

export interface PageMeta {
  title: string
  description: string
  ogImage: string
  url: string
}

export const generateMeta = (args: { doc: any }): PageMeta => {
  const { doc } = args
  const ogImage = getImageURL(doc?.meta?.image)
  const title = doc?.meta?.title
    ? doc.meta.title + ' | Payload Website Template'
    : 'Payload Website Template'

  return {
    title,
    description: doc?.meta?.description || '',
    ogImage,
    url: Array.isArray(doc?.slug) ? doc.slug.join('/') : '/',
  }
}
