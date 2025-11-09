import type { Project, ProjectMeta } from '@/types/project'

// 项目元数据
export const projects: ProjectMeta[] = [
  {
    id: 'selecttext',
    title: 'SelectText',
    description: 'Effortlessly extract text from any webpage using OCR technology.',
    previewImage: '/images/projects/selecttext.jpg',
    type: 'Browser Extension',
    tags: ['OCR', 'Text Recognition', 'Productivity'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/selecttext/mlipaajjeaknlghlninkbgjilmdcknni',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
    ],
    slug: 'selecttext',
    featured: false,
    created: '2025-11-08',
    updated: '2025-11-08',
  },
  {
    id: 'sticky-reddit-search',
    title: 'Sticky Reddit Search',
    description: 'Keep your Reddit search filters (sort, time range, type) when searching with new keywords',
    previewImage: '/images/projects/sticky-reddit-search.jpg',
    type: 'Browser Extension',
    tags: ['Reddit', 'Search', 'Chrome', 'Firefox'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/sticky-reddit-search/onpejjljjpabiobobaihncgijgllbifa',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/goaadeepmpbcfkgnfckeophoplompkog',
        icon: 'edge',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/sticky-reddit-search/',
        icon: 'firefox',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/sticky-reddit-search',
        icon: 'github',
      },
    ],
    slug: 'sticky-reddit-search',
    featured: false,
    created: '2025-11-03',
    updated: '2025-11-03',
  },
  {
    id: 'typescript-console',
    title: 'TypeScript Console',
    description: 'A TypeScript REPL for the browser console.',
    previewImage: '/images/projects/typescript-console.jpg',
    type: 'Browser Extension',
    tags: ['TypeScript', 'REPL', 'DevTools'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/typescript-console/jkanoakidjoklcefakbdnnhgdenddppg',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/typescript-console',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/typescript-console/ecadiffnmjlefcbkgkdllneldockkehe',
        icon: 'edge',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/app/id6754164761',
        icon: 'safari',
      },
    ],
    slug: 'typescript-console',
    featured: false,
    created: '2025-10-02',
    updated: '2025-10-05',
  },
  {
    id: 'linkpure',
    title: 'LinkPure',
    description: 'Monitor clipboard URL changes and rewrite them based on user-defined rules.',
    previewImage: '/images/projects/linkpure.jpg',
    type: 'App',
    tags: ['Mac', 'Clipboard'],
    links: [
      {
        type: 'store',
        name: 'App Store',
        url: 'https://apps.apple.com/app/id6753670551',
        icon: 'appstore',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/LinkPure',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Windows',
        url: 'https://github.com/rxliuli/LinkPure/releases/latest',
        icon: 'windows',
      },
    ],
    slug: 'linkpure',
    featured: false,
    created: '2025-10-05',
    updated: '2025-10-05',
  },
  {
    id: 'reddit-ctrl-enter-sender',
    title: 'Reddit Ctrl+Enter Sender',
    description: 'Send messages on Reddit with Ctrl+Enter',
    previewImage: '/images/projects/reddit-ctrl-enter-sender.jpg',
    type: 'Browser Extension',
    tags: ['Reddit', 'Shortcuts', 'Chrome'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/fcehnhacdhcomeahldnecolememgfafk',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/reddit-ctrl-enter-sender',
        icon: 'github',
      },
    ],
    slug: 'reddit-ctrl-enter-sender',
    featured: false,
    created: '2025-08-20',
    updated: '2025-08-20',
  },
  {
    id: 'input-translator',
    title: 'Input Translator',
    description: 'Translate your input text with AI.',
    previewImage: '/images/projects/input-translator.jpg',
    type: 'Browser Extension',
    tags: ['Chrome', 'Firefox', 'AI'],
    links: [
      {
        type: 'other',
        name: 'Website',
        url: 'https://store.rxliuli.com/extensions/input-translator/',
        icon: 'website',
      },
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/namibphobdcighbjjojlhcflpnhobjeo',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/input-translator',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/app/input-translator/id6749811908',
        icon: 'safari',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/input-translator/',
        icon: 'firefox',
      },
    ],
    slug: 'input-translator',
    featured: false,
    created: '2025-08-11',
    updated: '2025-08-22',
  },
  {
    id: 'gmail-notifier',
    title: 'Gmail Notifier',
    description: 'Never Miss an Important Email Again',
    previewImage: '/images/projects/gmail-notifier.jpg',
    type: 'Browser Extension',
    tags: ['Gmail', 'Chrome', 'Firefox'],
    links: [
      {
        type: 'other',
        name: 'Website',
        url: 'https://gmail-notifier.rxliuli.com',
        icon: 'website',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/5jkx5G6dUJ',
        icon: 'discord',
      },
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/liabcmaifgemdglcbialogmljhekgnle',
        icon: 'chrome',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/gmail-notifier233/',
        icon: 'firefox',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/gmail-notifier',
        icon: 'github',
      },
    ],
    slug: 'gmail-notifier',
    featured: false,
    created: '2025-08-08',
    updated: '2025-08-14',
  },
  {
    id: 'fast-bookmark',
    title: 'Fast Bookmark',
    description: 'Quick Save with Smart Folders',
    previewImage: '/images/projects/fast-bookmark.jpg',
    type: 'Browser Extension',
    tags: ['Bookmark', 'Chrome', 'Firefox'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/mhdmiffahinpfnfegihlfmpappeemibk',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/9NphH4rkkd',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/fast-bookmark',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/fast-bookmark/',
        icon: 'firefox',
      },
    ],
    slug: 'fast-bookmark',
    featured: false,
    created: '2025-07-26',
    updated: '2025-07-26',
  },
  {
    id: 'fetch-beautifier',
    title: 'Fetch Beautifier',
    description: 'Clean up messy fetch code instantly from DevTools',
    previewImage: '/images/projects/fetch-beautifier.jpg',
    type: 'VSCode Extension',
    tags: ['Fetch', 'Beautifier'],
    slug: 'fetch-beautifier',
    featured: false,
    created: '2025-06-14',
    updated: '2025-06-14',
    links: [
      {
        type: 'store',
        name: 'VSCode',
        url: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.fetch-beautifier',
        icon: 'vscode',
      },
      {
        type: 'other',
        name: 'Website',
        url: 'https://rxliuli.com/fetch-beautifier/',
        icon: 'website',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/fetch-beautifier',
        icon: 'github',
      },
    ],
  },
  {
    id: 'idbport',
    title: 'IDBPort',
    description: 'A modern browser extension designed for effortless export and import of IndexedDB data.',
    previewImage: '/images/projects/idbport.jpg',
    type: 'Browser Extension',
    tags: ['IndexedDB', 'Data Migration', 'Chrome', 'Safari'],
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/kmpakemocjdhfcpfggpodkjhmjibhhhm',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/fErBc3wYrC',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/idbport',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/idbport/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/us/app/idbport/id6746375879',
        icon: 'safari',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/hbkndbebjhoeolinhoebndnkgnghfkmb',
        icon: 'edge',
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
    slug: 'ponytab',
    featured: false,
    created: '2025-05-06',
    updated: '2025-10-14',
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/gcahckghmpoodflilkignobggjmlcaih',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/uGjdZRddwa',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/ponytab',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/ponytab/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Edge',
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
        type: 'other',
        name: 'Website',
        url: 'https://ponytab.rxliuli.com',
        icon: 'website',
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
    slug: 'redirector',
    featured: false,
    created: '2024-09-12',
    updated: '2025-08-21',
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/redirector/lioaeidejmlpffbndjhaameocfldlhin',
        icon: 'chrome',
      },
      {
        type: 'other',
        name: 'Website',
        url: 'https://store.rxliuli.com/extensions/redirector/',
        icon: 'website',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/jwhvMBTM6G',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/redirector',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/redirector/jhdjcofnjfeljeekjklhgfmfocfgibmm',
        icon: 'edge',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/app/url-redirector/id6743197230',
        icon: 'safari',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/redirector-url/',
        icon: 'firefox',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/posts/redirector-2',
        icon: 'producthunt',
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
    slug: 'mass-block-twitter',
    featured: true,
    created: '2025-01-01',
    updated: '2025-06-05',
    links: [
      {
        type: 'other',
        name: 'Website',
        url: 'https://mass-block-twitter.rxliuli.com',
        icon: 'website',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/gFhKUthc88',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/mass-block-twitter',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/mass-block-twitter/eaghpebepefbcadjdppjjopoagckdhej',
        icon: 'chrome',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/mass-block-twitter/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/mass-block-twitter/jfmhejlgepjmbgeceljmdeimmdolfadf',
        icon: 'edge',
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
    slug: 'ping',
    featured: false,
    created: '2025-05-01',
    updated: '2025-05-01',
    links: [
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/ping',
        icon: 'github',
      },
    ],
  },
  {
    id: 'window-resizer',
    title: 'Window Resizer',
    description: 'A simple macOS menu bar utility to quickly resize the active window to your predefined dimensions.',
    previewImage: '/images/projects/window-resizer.jpg',
    type: 'App',
    tags: ['Mac', 'Wails', 'Golang', 'AppleScript'],
    slug: 'window-resizer',
    featured: false,
    created: '2025-04-27',
    updated: '2025-05-01',
    links: [
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/window-resizer',
        icon: 'github',
      },
    ],
  },
  {
    id: 'cors-unblock',
    title: 'CORS Unblock',
    description: 'CORS Unblock is a browser extension that allows you to bypass CORS restrictions on websites.',
    previewImage: '/images/projects/cors-unblock.jpg',
    type: 'Browser Extension',
    tags: ['CORS', 'Chrome', 'Firefox', 'Safari'],
    slug: 'cors-unblock',
    featured: false,
    created: '2025-04-18',
    updated: '2025-04-29',
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/cors-unblock/odkadbffomicljkjfepnggiibcjmkogc',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/re3cFtxAjT',
        icon: 'discord',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/cors-unblock',
        icon: 'github',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/cors-unblock2/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/app/cors-unblock/id6744779652',
        icon: 'safari',
      },
      {
        type: 'social',
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/products/cors-unblock',
        icon: 'producthunt',
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
    slug: 'myunzip',
    featured: false,
    created: '2025-04-18',
    updated: '2025-04-22',
    links: [
      {
        type: 'other',
        name: 'Website',
        url: 'https://myunzip.com/',
        icon: 'website',
      },
    ],
  },
  {
    id: 'joplin-vscode-plugin',
    title: 'Joplin VSCode Plugin',
    description: 'Provides the functionality to manage Joplin notes within VSCode',
    previewImage: '/images/projects/joplin-vscode-plugin.jpg',
    type: 'VSCode Extension',
    tags: ['VSCode', 'Joplin API'],
    slug: 'joplin-vscode-plugin',
    featured: false,
    created: '2020-06-01',
    updated: '2020-04-16',
    links: [
      {
        type: 'store',
        name: 'Documentation',
        url: 'https://joplin-utils.rxliuli.com/en-US/joplin-vscode-plugin/',
        icon: 'vscode',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/joplin-utils',
        icon: 'github',
      },
    ],
  },
  {
    id: 'clean-twitter',
    title: 'Clean Twitter',
    description: 'Clean up some annoying elements on Twitter and make your Twitter experience cleaner',
    previewImage: '/images/projects/clean-twitter.jpg',
    type: 'Browser Extension',
    tags: ['Chrome', 'React', 'Twitter'],
    slug: 'clean-twitter',
    featured: false,
    created: '2023-06-27',
    updated: '2025-09-05',
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/lbbfmkbgembfbohdadeggdcgdkmfdmpb',
        icon: 'chrome',
      },
      {
        type: 'other',
        name: 'Website',
        url: 'https://store.rxliuli.com/extensions/clean-twitter/',
        icon: 'website',
      },
      {
        type: 'social',
        name: 'Discord',
        url: 'https://discord.gg/gFhKUthc88',
        icon: 'discord',
      },
      {
        type: 'store',
        name: 'Firefox',
        url: 'https://addons.mozilla.org/firefox/addon/clean-twitter-2333/',
        icon: 'firefox',
      },
      {
        type: 'store',
        name: 'Edge',
        url: 'https://microsoftedge.microsoft.com/addons/detail/akhbfdeilcclmfbmbkndjabkgfhgdede',
        icon: 'edge',
      },
      {
        type: 'store',
        name: 'Safari',
        url: 'https://apps.apple.com/cn/app/id6752027292',
        icon: 'safari',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/clean-twitter',
        icon: 'github',
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
    slug: 'bilibili-markdown',
    featured: false,
    created: '2024-01-26',
    updated: '2025-01-01',
    links: [
      {
        type: 'store',
        name: 'Chrome',
        url: 'https://chromewebstore.google.com/detail/gnhfnomkebeabllbfnodhhhebnieehoe',
        icon: 'chrome',
      },
      {
        type: 'social',
        name: 'GitHub',
        url: 'https://github.com/rxliuli/bilibili-markdown',
        icon: 'github',
      },
    ],
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

// 获取精选项目
export function getFeaturedProjects(limit: number = 3): ProjectMeta[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    .slice(0, limit)
}

