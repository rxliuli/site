import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 每个项目一个 YAML，文件名即项目 slug。
// 上半部分是元数据（列表、首页卡片、详情页头部），下半部分是详情页内容。
// 文本字段支持 `code` 和 **bold** 两种行内格式。

const item = z.object({
  title: z.string(),
  body: z.string(),
})

// 可选配图，宽屏时与内容并排
const image = z.object({ src: z.string(), alt: z.string() }).optional()

const block = z.discriminatedUnion('type', [
  // 卡片网格
  z.object({
    type: z.literal('features'),
    image,
    title: z.string(),
    intro: z.string().optional(),
    items: z.array(item).min(1),
  }),
  // 带箭头的说明列表
  z.object({
    type: z.literal('list'),
    image,
    title: z.string(),
    intro: z.string().optional(),
    items: z.array(item).min(1),
    note: z.string().optional(),
  }),
  // 编号步骤
  z.object({
    type: z.literal('steps'),
    image,
    title: z.string(),
    intro: z.string().optional(),
    items: z.array(z.string()).min(1),
    note: z.string().optional(),
  }),
  // 代码或目录树
  z.object({
    type: z.literal('code'),
    image,
    title: z.string(),
    intro: z.string().optional(),
    code: z.string(),
    note: z.string().optional(),
  }),
])

const link = z.object({
  // store 渲染为安装按钮，其余渲染为文字链接
  type: z.enum(['store', 'social', 'community', 'other']),
  icon: z.enum([
    'chrome',
    'firefox',
    'edge',
    'safari',
    'discord',
    'producthunt',
    'github',
    'website',
    'vscode',
    'appstore',
    'android',
    'windows',
    'linux',
    'macos',
  ]),
  name: z.string(),
  url: z.string().url(),
})

// YYYY-MM-DD 字符串，保持与旧数据一致，便于排序比较
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    // 元数据
    title: z.string(),
    description: z.string(),
    type: z.enum(['Browser Extension', 'Website', 'App', 'CLI Tool', 'VSCode Extension']),
    tags: z.array(z.string()).optional(),
    previewImage: z.string(),
    // 为 true 时在列表中排在最前
    featured: z.boolean().optional(),
    created: date.optional(),
    updated: date,
    links: z.array(link).optional(),

    // 详情页内容
    icon: z.string().optional(),
    tagline: z.string(),
    intro: z.string(),
    install: z
      .object({
        command: z.string().optional(),
        note: z.string().optional(),
      })
      .optional(),
    screenshot: z.object({ src: z.string(), alt: z.string() }).optional(),
    blocks: z.array(block).default([]),
    privacy: z.array(z.string()).min(1),
    license: z.string().optional(),
  }),
})

export const collections = { projects }
