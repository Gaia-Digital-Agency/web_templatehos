import { cn } from '@/utilities/ui'
import React from 'react'
import type { Props as MediaProps } from '../types'
import { getPayloadURL } from '@/utilities/getURL'

const getMediaUrl = (url?: string | null, cacheTag?: string | null): string => {
  if (!url) return ''
  const payloadUrl = getPayloadURL()
  const base = url.startsWith('http') ? url : `${payloadUrl}${url}`
  return cacheTag ? `${base}?t=${cacheTag}` : base
}

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const { alt: altFromProps, fill, pictureClassName, imgClassName, priority, resource, size: sizeFromProps, src: srcFromProps, loading: loadingFromProps } = props

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const { alt: altFromResource, height: fullHeight, url, width: fullWidth } = resource
    width = fullWidth!
    height = fullHeight!
    alt = altFromResource || ''
    src = getMediaUrl(url, resource.updatedAt)
  }

  const loading = loadingFromProps || (!priority ? 'lazy' : undefined)

  // Generate srcset for responsive images
  const srcSet = resource && typeof resource === 'object' && resource.sizes
    ? Object.entries(resource.sizes)
        .filter(([, size]: [string, any]) => size?.url && size?.width)
        .map(([, size]: [string, any]) => `${getMediaUrl(size.url)} ${size.width}w`)
        .join(', ')
    : undefined

  return (
    <picture className={cn(pictureClassName)}>
      <img
        alt={alt || ''}
        className={cn(imgClassName)}
        height={!fill ? height : undefined}
        width={!fill ? width : undefined}
        loading={loading}
        decoding="async"
        sizes={sizeFromProps || '100vw'}
        srcSet={srcSet}
        src={src}
        style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } : undefined}
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  )
}
