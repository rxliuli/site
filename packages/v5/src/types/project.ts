export type ProjectType = 'Browser Extension' | 'Website' | 'App' | 'CLI Tool' | 'VSCode Extension'

export interface Project {
  id: string
  title: string
  description: string
  content?: string // 详细描述，用于详情页
  previewImage: string
  type: ProjectType
  tags?: string[] // 可选，用于进一步分类
  projectUrl?: string // 站外链接，可选
  sourceCodeUrl?: string // GitHub链接，可选
  slug: string // 用于路由
  featured?: boolean // 是否在首页展示
  updated: string // 项目创建日期
  created?: string // 项目最后更新日期
}

