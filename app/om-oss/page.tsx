import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Om oss' })

export default function Page() {
  const author_1 = allAuthors.find((p) => p.slug === 'magnus') as Authors
  const author_2 = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent_1 = coreContent(author_1)
  const mainContent_2 = coreContent(author_2)

  return (
    <>
      <AuthorLayout content={mainContent_1} show_title={true}>
        <MDXLayoutRenderer code={author_1.body.code} />
      </AuthorLayout>
      <AuthorLayout content={mainContent_2}>
        <MDXLayoutRenderer code={author_2.body.code} />
      </AuthorLayout>
    </>
  )
}
