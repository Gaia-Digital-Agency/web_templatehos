import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import React, { useState, useEffect } from 'react'
import RichText from '@/components/RichText'
import { payloadClient } from '@/lib/payload-client'

import { CollectionArchive } from '@/components/CollectionArchive'

// Component for rendering a collection archive with optional filtering by categories
export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  const [posts, setPosts] = useState<Post[]>(() => {
    // For 'relationship' mode, we can resolve selected docs immediately
    if (populateBy !== 'collection' && selectedDocs?.length) {
      return selectedDocs
        .map((post) => (typeof post.value === 'object' ? post.value : undefined))
        .filter(Boolean) as Post[]
    }
    return []
  })

  useEffect(() => {
    if (populateBy !== 'collection') return

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    payloadClient
      .find<Post>('posts', {
        depth: 1,
        limit,
        ...(flattenedCategories && flattenedCategories.length > 0
          ? {
              where: {
                categories: {
                  in: flattenedCategories,
                },
              },
            }
          : {}),
      })
      .then((result) => {
        setPosts(result.docs)
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err)
      })
  }, [populateBy, categories, limit])

  return (
    <div id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  )
}
