import type { ProjectLink, ProjectMeta, ProjectType } from '../types/project'

export interface ProjectKind {
  type: ProjectType
  /** 用于 URL 查询参数，如 /project?type=extension */
  slug: string
  label: string
  /** 卡片角标用的短名 */
  short: string
}

export const projectKinds: ProjectKind[] = [
  { type: 'Browser Extension', slug: 'extension', label: 'Browser extensions', short: 'ext' },
  { type: 'App', slug: 'app', label: 'Apps', short: 'app' },
  { type: 'Website', slug: 'web', label: 'Websites', short: 'web' },
  { type: 'VSCode Extension', slug: 'vscode', label: 'VSCode extensions', short: 'vscode' },
  { type: 'CLI Tool', slug: 'cli', label: 'CLI tools', short: 'cli' },
]

export function getProjectKind(type: ProjectType): ProjectKind {
  return projectKinds.find((it) => it.type === type)!
}

/** 按类型统计数量，只返回有项目的类型 */
export function countByKind(projects: ProjectMeta[]) {
  return projectKinds
    .map((kind) => ({ ...kind, count: projects.filter((p) => p.type === kind.type).length }))
    .filter((it) => it.count > 0)
}

const platformNames: Partial<Record<ProjectLink['icon'], string>> = {
  chrome: 'chrome',
  firefox: 'firefox',
  edge: 'edge',
  safari: 'safari',
  macos: 'macos',
  appstore: 'app store',
  vscode: 'vscode',
  android: 'android',
  windows: 'windows',
  linux: 'linux',
}

/** 从商店链接推断运行平台，用于卡片底部的一行小字 */
export function getPlatforms(project: ProjectMeta): string[] {
  const names = (project.links ?? [])
    .filter((link) => link.type === 'store')
    .map((link) => platformNames[link.icon])
    .filter((it): it is string => !!it)
  const unique = [...new Set(names)]
  if (unique.length > 0) {
    return unique
  }
  return project.type === 'Website' ? ['web'] : []
}

/** 项目名的两字母缩写，作为没有图标时的占位 */
export function getMonogram(title: string): string {
  const words = title.split(/[\s-]+/).filter(Boolean)
  const mono = words.length > 1 ? words[0][0] + words[1][0] : title.slice(0, 2)
  return mono.toLowerCase()
}
