import type { CollectionEntry } from 'astro:content'

// 类型由 src/content.config.ts 中的 schema 推导，项目数据在 src/content/projects/*.yaml
export type ProjectMeta = CollectionEntry<'projects'>['data'] & { slug: string }
export type ProjectType = ProjectMeta['type']
export type ProjectLink = NonNullable<ProjectMeta['links']>[number]
