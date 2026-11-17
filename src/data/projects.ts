import { getCollection } from 'astro:content'
import type { ProjectMeta } from '../types/project'

// 所有项目：featured 在前，其余按更新时间倒序；同一天更新的按发布时间倒序，再按标题
export async function getAllProjects(): Promise<ProjectMeta[]> {
  const entries = await getCollection('projects')
  return entries
    .map((entry) => ({ ...entry.data, slug: entry.id }))
    .sort((a, b) => {
      if (!!a.featured === !!b.featured) {
        return (
          b.updated.localeCompare(a.updated) ||
          (b.created ?? '').localeCompare(a.created ?? '') ||
          a.title.localeCompare(b.title)
        )
      }
      return a.featured ? -1 : 1
    })
}
