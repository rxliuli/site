import { Link } from '@tanstack/react-router'
import type { ProjectMeta } from '@/types/project'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLinkIcon, MoreHorizontal } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ProjectIcon } from './project-icon'

interface ProjectCardProps {
  project: ProjectMeta
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.previewImage}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="flex-1 mb-auto flex flex-col">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <Badge variant="outline">{project.type}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
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
          {project.links && project.links.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More links</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {project.links.map((link) => (
                  <DropdownMenuItem key={link.url} asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ProjectIcon icon={link.icon} />
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

