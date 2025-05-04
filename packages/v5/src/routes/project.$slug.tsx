import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { getProjectBySlug } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import dayjs from 'dayjs'
import { meta } from '@/components/seo'

export const Route = createFileRoute('/project/$slug')({
  component: ProjectDetailPage,
  loader: async ({ params }) => getProjectBySlug(params.slug),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {}
    }
    return {
      meta: meta({
        title: loaderData.title,
        description: loaderData.description,
        image: loaderData.previewImage,
        type: 'website',
        tags: loaderData.tags,
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
      <article className="max-w-4xl mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">{project.type}</Badge>
            <span className="inline-flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {dayjs(project.updated).format('YYYY-MM-DD')}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-lg border">
          <img src={project.previewImage} alt={project.title} className="h-full w-full object-cover" />
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4">
          {project.projectUrl && (
            <Button asChild>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Visit Project
              </a>
            </Button>
          )}
          {project.sourceCodeUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <SiGithub className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          )}
        </div>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Content */}
        {project.content && (
          <div className="pt-4 border-t">
            <div
              className={'prose prose-lg dark:prose-invert max-w-none'}
              dangerouslySetInnerHTML={{ __html: project.content }}
            ></div>
          </div>
        )}
      </article>
    </>
  )
}

