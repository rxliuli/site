import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { getProjectBySlug } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react'
import dayjs from 'dayjs'
import { meta } from '@/components/seo'
import { MarkdownView } from '@/components/MarkdownView'
import { Separator } from '@/components/ui/separator'
import { ProjectIcon } from '@/components/project/project-icon'
import { SiGithub } from 'react-icons/si'

export const Route = createFileRoute('/project/$slug')({
  component: ProjectDetailPage,
  loader: async ({ params }) => getProjectBySlug(params.slug),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {}
    }
    const isFullImage = loaderData.meta.previewImage.startsWith('https://')
    const fullImage = isFullImage ? loaderData.meta.previewImage : 'https://rxliuli.com' + loaderData.meta.previewImage
    return {
      meta: meta({
        title: loaderData.meta.title,
        description: loaderData.meta.description,
        image: fullImage,
        type: 'website',
        tags: loaderData.meta.tags,
      }),
    }
  },
})

export function ProjectDetailPage() {
  const project = useLoaderData({ from: '/project/$slug' })

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <a href="/project">Back to Projects</a>
        </Button>
      </div>
    )
  }

  return (
    <>
      <article className="max-w-4xl mx-auto py-8 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">{project.meta.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">{project.meta.type}</Badge>
            <span className="inline-flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {dayjs(project.meta.updated).format('YYYY-MM-DD')}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden rounded-lg border">
          <img src={project.meta.previewImage} alt={project.meta.title} className="h-full w-full object-cover" />
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground">{project.meta.description}</p>

        {/* Links */}
        <div className="space-y-4">
          {project.meta.links && project.meta.links.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                {['store', 'social', 'community', 'other'].map((type) => {
                  const typeLinks = project.meta.links?.filter((link) => link.type === type)
                  if (!typeLinks?.length) return null

                  return (
                    <div key={type} className="space-y-2">
                      <h3 className="text-sm font-medium capitalize">{type} Links</h3>
                      <div className="flex flex-wrap gap-2">
                        {typeLinks.map((link) => (
                          <Button key={link.url} variant="outline" size="sm" asChild>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center"
                            >
                              <ProjectIcon icon={link.icon} />
                              {link.name}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        {project.meta.tags && (
          <div className="flex flex-wrap gap-2">
            {project.meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Content */}
        {project.html && (
          <div className="pt-4 border-t">
            <MarkdownView dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
        )}
      </article>
    </>
  )
}

