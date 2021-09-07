export interface CreatorConfig {
  img: string
  title: string
  content: string
  github?: string
  home?: string
}

const configList: CreatorConfig[] = [
  {
    img: '/images/joplin-vscode-plugin.svg',
    title: 'joplin-vscode-plugin',
    content:
      'joplin-vscode-plugin 提供在 vscode 中管理 joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。',
    github:
      'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-vscode-plugin',
    home: 'https://joplin-utils.rxliuli.com/joplin-vscode-plugin/',
  },
  {
    img: '/images/liuli-tools.png',
    title: 'liuli-tools',
    content:
      '一些项目级别的工具集，主要尝试研发提效，欢迎来 [讨论区](https://github.com/rxliuli/liuli-tools/discussions) 交流想法。',
    github: 'https://github.com/rxliuli/liuli-tools',
    home: 'https://liuli-tools.rxliuli.com/zh/',
  },
  {
    img: '/images/liuli-utils.png',
    title: 'liuli-utils',
    content:
      '吾辈使用的工具函数库，按照功能分割成不同的模块，都发布在 [@liuli-util](https://www.npmjs.com/org/liuli-util) 组织下，可以单独引入指定模块。',
    github: 'https://github.com/rxliuli/liuli-utils',
    home: 'https://liuli-utils.rxliuli.com/',
  },
  {
    img: '/images/joplin-blog.svg',
    title: 'joplin-blog',
    content:
      '将 Joplin 笔记发布为静态网站的 CLI 工具，目前支持 blog/wiki 两种形式，框架支持 hexo/vuepress/docsify。',
    github:
      'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-blog',
    home: 'https://www.npmjs.com/package/joplin-blog',
  },
  {
    img: '/images/vite-jetbrains-plugin.svg',
    title: 'vite-jetbrains-plugin',
    content:
      'Vite 脚手架在 JetBrains IDE 中的集成，可以直接使用 IDE 的引导面板创建一个项目。',
    github:
      'https://github.com/rxliuli/liuli-tools/blob/master/jetbrains-plugins/vite-jetbrains-plugin/',
    home: 'https://plugins.jetbrains.com/plugin/16897',
  },
  {
    img: '/images/joplin-api.svg',
    title: 'joplin-api',
    content:
      'Joplin api 的 js 封装，使用 ts 编写，支持浏览器、nodejs，包含目前所有在文档中公开的 api',
    github:
      'https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-api',
    home: 'https://joplin-utils.rxliuli.com/joplin-api//',
  },
  {
    img: '/images/joplin-search-integration.svg',
    title: 'joplin-search-integration',
    content: '使用搜索时，相关的乔普林笔记也会显示在搜索结果中。',
    github:
      'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-search-integration',
    home: 'https://chrome.google.com/webstore/detail/mcjkdcifkhjenpfjacnbhpdcnjknjkhj',
  },
  {
    img: '/images/joplin-batch.svg',
    title: 'joplin-batch-web',
    content:
      '处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。',
    github:
      'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web',
    home: 'https://joplin-utils.rxliuli.com/joplin-batch-web/',
  },
  {
    img: '/images/greasemonkey.svg',
    title: 'user.js',
    content: '日常需要用到便自行实现的油猴脚本',
    github: 'https://github.com/rxliuli/userjs',
  },
]

class CreatorApi {
  async list(): Promise<CreatorConfig[]> {
    return configList
  }
}

export const creatorApi = new CreatorApi()
