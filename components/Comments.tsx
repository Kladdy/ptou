'use client'

import { useTheme } from 'next-themes'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(true)
  const { resolvedTheme } = useTheme() // Theme based colors fix based on https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/1153

  if (!siteMetadata.comments?.provider) {
    return null
  }

  let commentsConfigWithDarkTheme = siteMetadata.comments

  if (siteMetadata.comments.provider === 'giscus' && siteMetadata.comments.giscusConfig) {
    commentsConfigWithDarkTheme = {
      ...siteMetadata.comments,
      giscusConfig: {
        ...siteMetadata.comments.giscusConfig,
        theme:
          resolvedTheme === 'dark'
            ? siteMetadata.comments.giscusConfig.darkTheme
            : siteMetadata.comments.giscusConfig.theme,
      },
    }
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={commentsConfigWithDarkTheme} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
