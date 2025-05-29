'use client'

import { useTheme } from 'next-themes'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(true)
  const { resolvedTheme } = useTheme() // Theme based colors fix based on https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/1153
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  console.log('Comments', { resolvedTheme })

  if (!siteMetadata.comments?.provider) {
    return null
  }

  let commentsConfigWithDarkTheme = siteMetadata.comments

  if (siteMetadata.comments.provider === 'giscus' && siteMetadata.comments.giscusConfig) {
    console.log('true')
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
  } else {
    console.log('false')
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={commentsConfigWithDarkTheme} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Ladda kommentarer</button>
      )}
    </>
  )
}
