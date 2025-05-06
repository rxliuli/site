import { Link } from '@tanstack/react-router'
import type { ProjectMeta } from '@/types/project'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLinkIcon } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

interface ProjectCardProps {
  project: ProjectMeta
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.previewImage}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <Badge variant="outline">{project.type}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4 bg-muted/50">
        <Link
          to={`/project/$slug`}
          params={{ slug: project.slug }}
          className="text-sm font-medium hover:underline text-primary"
        >
          View Details
        </Link>
        <div className="flex items-center space-x-2">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              title="Visit Project"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              <span className="sr-only">Visit Project</span>
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              title="View Source Code"
            >
              <SiGithub className="h-4 w-4" />
              <span className="sr-only">View Source Code</span>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

