import type { Project, ProjectMeta } from '@/types/project'

// 项目元数据
export const projects: ProjectMeta[] = [
  {
    id: 'fetch-beautifier',
    title: 'Fetch Beautifier',
    description: 'Clean up messy fetch code instantly from DevTools',
    previewImage: '/images/projects/fetch-beautifier.jpg',
    type: 'Website',
    tags: ['Fetch', 'Beautifier', 'Devtools'],
    projectUrl: 'https://rxliuli.com/fetch-beautifier/',
    sourceCodeUrl: 'https://github.com/rxliuli/fetch-beautifier',
    slug: 'fetch-beautifier',
    featured: false,
    created: '2025-06-14',
    updated: '2025-06-14',
  },
  {
    id: 'idbport',
    title: 'IDBPort',
    description: 'A modern browser extension designed for effortless export and import of IndexedDB data.',
    previewImage: '/images/projects/idbport.jpg',
    type: 'Browser Extension',
    tags: ['IndexedDB', 'Data Migration', 'Chrome', 'Safari'],
    projectUrl: 'https://chromewebstore.google.com/detail/kmpakemocjdhfcpfggpodkjhmjibhhhm',
    sourceCodeUrl: 'https://github.com/rxliuli/idbport',
    links: [
      {
        type: 'store',
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/en-US/firefox/addon/idbport/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Safari Extension',
        url: 'https://apps.apple.com/us/app/idbport/id6746375879',
        icon: 'safari',
      },
      {
        type: 'store',
        name: 'Microsoft Edge Add-ons',
        url: 'https://microsoftedge.microsoft.com/addons/detail/hbkndbebjhoeolinhoebndnkgnghfkmb',
        icon: 'edge',
      },
      {
        type: 'social',
        name: 'Discord Community',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/posts/idbport',
        icon: 'producthunt',
      },
    ],
    slug: 'idbport',
    featured: false,
    created: '2025-05-22',
    updated: '2025-05-25',
  },
  {
    id: 'ponytab',
    title: 'PonyTab',
    description:
      'A beautiful Browser extension that replaces your new tab page with stunning My Little Pony artwork by Sam Baneko.',
    previewImage: '/images/projects/ponytab.jpg',
    type: 'Browser Extension',
    tags: ['My Little Pony', 'Artwork', 'Chrome'],
    projectUrl: 'https://chromewebstore.google.com/detail/gcahckghmpoodflilkignobggjmlcaih',
    sourceCodeUrl: 'https://github.com/rxliuli/ponytab',
    slug: 'ponytab',
    featured: false,
    created: '2025-05-06',
    updated: '2025-05-08',
    links: [
      {
        type: 'store',
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/zh-CN/firefox/addon/ponytab/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Edge Add-ons',
        url: 'https://microsoftedge.microsoft.com/addons/detail/jilgmjcmkianchonfkadmomoieiglogo',
        icon: 'edge',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/posts/ponytab',
        icon: 'producthunt',
      },
      {
        type: 'social',
        name: 'Discord Community',
        url: 'https://discord.gg/uGjdZRddwa',
        icon: 'discord',
      },
    ],
  },
  {
    id: 'redirector',
    title: 'Redirector',
    description: 'Dynamic URL Redirector',
    previewImage: '/images/projects/redirector.jpg',
    type: 'Browser Extension',
    tags: ['Chrome', 'Safari', 'Svelte'],
    sourceCodeUrl: 'https://github.com/rxliuli/redirector',
    projectUrl: 'https://chromewebstore.google.com/detail/redirector/lioaeidejmlpffbndjhaameocfldlhin',
    slug: 'redirector',
    featured: false,
    created: '2024-09-12',
    updated: '2025-05-08',
    links: [
      {
        type: 'store',
        name: 'Edge Add-ons',
        url: 'https://microsoftedge.microsoft.com/addons/detail/redirector/jhdjcofnjfeljeekjklhgfmfocfgibmm',
        icon: 'edge',
      },
      {
        type: 'store',
        name: 'Safari Extension',
        url: 'https://apps.apple.com/cn/app/url-redirector/id6743197230',
        icon: 'safari',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/posts/redirector-2',
        icon: 'producthunt',
      },
      {
        type: 'social',
        name: 'Discord Community',
        url: 'https://discord.gg/jwhvMBTM6G',
        icon: 'discord',
      },
    ],
  },
  {
    id: 'mass-block-twitter',
    title: 'Mass Block Twitter',
    description: 'One-Click Solution to Clean Up Twitter/X Spam.',
    previewImage: '/images/projects/mass-block-twitter.jpg',
    type: 'Browser Extension',
    tags: ['Twitter', 'Batch Block', 'Chrome'],
    projectUrl: 'https://mass-block-twitter.rxliuli.com',
    sourceCodeUrl: 'https://github.com/rxliuli/mass-block-twitter',
    slug: 'mass-block-twitter',
    featured: true,
    created: '2025-01-01',
    updated: '2025-06-05',
    links: [
      {
        type: 'store',
        name: 'Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/mass-block-twitter/eaghpebepefbcadjdppjjopoagckdhej',
        icon: 'chrome',
      },
      {
        type: 'store',
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/en-US/firefox/addon/mass-block-twitter/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Microsoft Edge Add-ons',
        url: 'https://microsoftedge.microsoft.com/addons/detail/mass-block-twitter/jfmhejlgepjmbgeceljmdeimmdolfadf',
        icon: 'edge',
      },
      {
        type: 'social',
        name: 'Discord Community',
        url: 'https://discord.gg/gFhKUthc88',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/products/mass-block-twitter',
        icon: 'producthunt',
      },
    ],
  },
  {
    id: 'ping',
    title: 'Ping',
    description: 'Quick and simple ping tool for testing network connectivity on Android devices.',
    previewImage: '/images/projects/ping.jpg',
    type: 'App',
    tags: ['Android', 'Kotlin', 'Jetpack Compose'],
    sourceCodeUrl: 'https://github.com/rxliuli/ping',
    slug: 'ping',
    featured: false,
    created: '2025-05-01',
    updated: '2025-05-01',
  },
  {
    id: 'window-resizer',
    title: 'Window Resizer',
    description: 'A simple macOS menu bar utility to quickly resize the active window to your predefined dimensions.',
    previewImage: '/images/projects/window-resizer.jpg',
    type: 'App',
    tags: ['Mac', 'Wails', 'Golang', 'AppleScript'],
    sourceCodeUrl: 'https://github.com/rxliuli/window-resizer',
    slug: 'window-resizer',
    featured: false,
    created: '2025-04-27',
    updated: '2025-05-01',
  },
  {
    id: 'cors-unblock',
    title: 'CORS Unblock',
    description: 'CORS Unblock is a browser extension that allows you to bypass CORS restrictions on websites.',
    previewImage: '/images/projects/cors-unblock.jpg',
    type: 'Browser Extension',
    tags: ['CORS', 'Chrome', 'Firefox', 'Safari'],
    projectUrl: 'https://chromewebstore.google.com/detail/cors-unblock/odkadbffomicljkjfepnggiibcjmkogc',
    sourceCodeUrl: 'https://github.com/rxliuli/cors-unblock',
    slug: 'cors-unblock',
    featured: false,
    created: '2025-04-18',
    updated: '2025-04-29',
    links: [
      {
        type: 'store',
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/zh-CN/firefox/addon/cors-unblock2/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Safari Extension',
        url: 'https://apps.apple.com/cn/app/cors-unblock/id6744779652',
        icon: 'safari',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/products/cors-unblock',
        icon: 'producthunt',
      },
      {
        type: 'social',
        name: 'Discord Community',
        url: 'https://discord.gg/re3cFtxAjT',
        icon: 'discord',
      },
    ],
  },
  {
    id: 'myunzip',
    title: 'MyUnzip',
    description: 'No-Limit Zip Tool: Preserves Folders, Any File Size',
    previewImage: '/images/projects/myunzip.jpg',
    type: 'Website',
    tags: ['React', 'Tanstack Router', 'Vibe Coding'],
    projectUrl: 'https://myunzip.com/',
    slug: 'myunzip',
    featured: false,
    created: '2025-04-18',
    updated: '2025-04-22',
  },
  {
    id: 'joplin-vscode-plugin',
    title: 'Joplin VSCode Plugin',
    description: 'Provides the functionality to manage Joplin notes within VSCode',
    previewImage: '/images/projects/joplin-vscode-plugin.jpg',
    type: 'VSCode Extension',
    tags: ['VSCode', 'Joplin API'],
    projectUrl: 'https://joplin-utils.rxliuli.com/en-US/joplin-vscode-plugin/',
    sourceCodeUrl: 'https://github.com/rxliuli/joplin-utils',
    slug: 'joplin-vscode-plugin',
    featured: false,
    created: '2020-06-01',
    updated: '2020-04-16',
  },
  {
    id: 'clean-twitter',
    title: 'Clean Twitter',
    description: 'Clean up some annoying elements on Twitter and make your Twitter experience cleaner',
    previewImage: '/images/projects/clean-twitter.jpg',
    type: 'Browser Extension',
    tags: ['Chrome', 'React', 'Twitter'],
    projectUrl: 'https://chromewebstore.google.com/detail/lbbfmkbgembfbohdadeggdcgdkmfdmpb',
    sourceCodeUrl: 'https://github.com/rxliuli/clean-twitter',
    slug: 'clean-twitter',
    featured: false,
    created: '2023-06-27',
    updated: '2023-03-28',
    links: [
      {
        type: 'store',
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/firefox/addon/clean-twitter-2333/',
        icon: 'firefox',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/products/clean-twitter',
        icon: 'producthunt',
      },
    ],
  },
  {
    id: 'bilibili-markdown',
    title: 'Bilibili Markdown',
    description: 'Add a feature to paste markdown content into the new version of the bilibili column editor.',
    previewImage: '/images/projects/bilibili-markdown.jpg',
    type: 'Browser Extension',
    tags: ['Chrome', 'Web Editor', 'Bilibili'],
    projectUrl: 'https://chromewebstore.google.com/detail/bilibili-markdown/bilibili-markdown',
    sourceCodeUrl: 'https://github.com/rxliuli/bilibili-markdown',
    slug: 'bilibili-markdown',
    featured: false,
    created: '2024-01-26',
    updated: '2025-01-01',
  },
]

// 获取所有项目
export function getAllProjects(): ProjectMeta[] {
  return projects
}

// 通过slug获取单个项目
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projectHtmls = import.meta.glob<string>('./projects/*.md', { query: '?html', import: 'default' })
  const meta = projects.find((project) => project.slug === slug)
  if (!meta) {
    return
  }

  try {
    if (!projectHtmls[`./projects/${slug}.md`]) {
      return {
        meta: meta,
      }
    }
    const html = await projectHtmls[`./projects/${slug}.md`]()
    return {
      meta: meta,
      html: html,
    }
  } catch (error) {
    console.error(`Failed to load markdown content for project ${slug}:`, error)
    return {
      meta: meta,
    }
  }
}

// 获取所有项目类型
export function getAllProjectTypes(): string[] {
  return Array.from(new Set(projects.map((project) => project.type)))
}

// 获取特定类型的项目
export function getProjectsByType(type: string): ProjectMeta[] {
  return projects.filter((project) => project.type === type)
}

// 获取精选项目
export function getFeaturedProjects(limit: number = 3): ProjectMeta[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    .slice(0, limit)
}

