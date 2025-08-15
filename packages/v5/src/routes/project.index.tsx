import { useState } from 'react'
import { ProjectCard } from '@/components/project/project-card'
import { getAllProjects, getAllProjectTypes } from '@/data/projects'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'
import { meta } from '@/components/seo'

export const Route = createFileRoute('/project/')({
  component: ProjectPage,
  head: () => ({
    meta: meta({
      title: 'Projects',
      description: 'Projects I have worked on, from browser extensions to mobile apps.',
    }),
  }),
})

export function ProjectPage() {
  const projects = getAllProjects()
  const projectTypes = ['All', ...getAllProjectTypes()]
  const [activeType, setActiveType] = useState('All')

  const filteredProjects = (
    activeType === 'All' ? projects : projects.filter((project) => project.type === activeType)
  ).sort((a, b) => {
    if (a.featured === b.featured) {
      return b.updated.localeCompare(a.updated)
    }
    return (b.featured ? 1 : -1) - (a.featured ? 1 : -1)
  })

  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-muted-foreground">
          A collection of projects I've worked on, from browser extensions to mobile apps.
        </p>
      </div>

      {/* 移动端下拉，md及以上Tabs */}
      <div className="block md:hidden mb-8">
        <Select value={activeType} onValueChange={setActiveType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="hidden md:block">
        <Tabs defaultValue="All" value={activeType} onValueChange={setActiveType}>
          <TabsList className="mb-8">
            {projectTypes.map((type) => (
              <TabsTrigger key={type} value={type}>
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No projects found for this category.</p>
        </div>
      )}
    </div>
  )
}

