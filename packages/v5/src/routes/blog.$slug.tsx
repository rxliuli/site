import { createFileRoute, Link, useLoaderData } from '@tanstack/react-router'
import { getBlogPostBySlug, formatDate } from '@/data/blog'
import { Outline } from '@/components/blog/Outline'
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { meta } from '@/components/seo'
import { MarkdownView } from '@/components/MarkdownView'
export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  loader: async ({ params }) => getBlogPostBySlug(params.slug),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {}
    }
    return {
      meta: meta({
        title: loaderData?.title,
        description: loaderData?.summary,
        type: 'article',
        publishedTime: loaderData?.date,
        tags: loaderData?.tags,
      }),
    }
  },
})

export function BlogPostPage() {
  const post = useLoaderData({ from: '/blog/$slug' })

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <div>
        {/* Back link */}
        <div className="mb-4 md:mb-6">
          <Link to="/blog" className="inline-flex items-center">
            <ArrowLeftIcon className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[250px_1fr_250px] gap-12">
          <div className="hidden xl:block"></div>
          <article className="w-full overflow-x-auto max-w-3xl mx-auto">
            {/* Article header */}
            <header className="mb-8 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center">
                  <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
                {post.readingTime && (
                  <span className="inline-flex items-center">
                    <ClockIcon className="mr-1 h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                )}
              </div>

              {post.coverImage && (
                <div className="overflow-hidden rounded-lg border">
                  <img src={post.coverImage} alt={post.title} className="h-auto w-full object-cover" />
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Article content */}
            <MarkdownView
              className="mx-auto lg:mx-0"
              dangerouslySetInnerHTML={{
                __html: post.content!,
              }}
            />
          </article>

          {/* Sidebar: Table of contents */}
          <aside className="hidden xl:block space-y-6">
            <div className="sticky top-20 space-y-6">
              <Outline outline={post.toc ?? []} />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

