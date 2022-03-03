import { Header } from './AboutView'
import css from './WorkView.module.css'
import github from '../assets/github.svg?raw'
import open from '../assets/open.svg?raw'
import joplin from '../assets/joplin-vscode-plugin-cover.png'
import liuliCli from '../assets/liuli-cli-cover.png'
import folder from '../assets/folder.svg?raw'
import { FunctionalComponent } from 'preact'
import ReactMarkdown from 'react-markdown'
import { LinkIcon, LinkIconItem } from '../components/LinkIcon'

interface Work {
  title: string
  description: string
  link: string
  image: string
  topic: string[]
  links: LinkIconItem[]
}

const primaryWorks: Work[] = [
  {
    title: 'Joplin Utils',
    description: `基于 Joplin 的周边社区工具。[joplin-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin) 提供在 vscode 中管理 joplin 笔记的功能，结合 vscode 现有的强大编辑器及其生态。[joplin-blog](https://www.npmjs.com/package/joplin-blog) 将指定标签的笔记发布为在线网站，可以选择 blog 或 wiki 的形式。还有开发者相关的一些工具集，包括 [joplin-api](https://www.npmjs.com/package/joplin-api)/[joplin-plugin-cli](https://www.npmjs.com/package/joplin-plugin-cli)。`,
    image: joplin,
    link: 'https://joplin-utils.rxliuli.com/',
    topic: ['vscode', 'joplin', 'hexo', 'vuepress', 'chrome'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-vscode-plugin',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin',
      },
    ],
  },
  {
    title: '@liuli-util/cli',
    description: `一个针对于库和 cli 应用程序打包的零配置 cli，基于 [esbuild](https://esbuild.github.io/)，它非常快，并且是自举的。同时也支持配置同步（prettier/eslint/git hooks/jest）、生成模板项目（cli/lib）以及部署相关（sftp/gh-pages）功能。`,
    image: liuliCli,
    link: 'https://www.npmjs.com/package/@liuli-util/cli',
    topic: ['cli', 'esbuild', 'deploy', 'generate', 'sync'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/liuli-tools/tree/master/apps/liuli-cli',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/cli',
      },
    ],
  },
]

const otherWorks: Omit<Work, 'image'>[] = [
  {
    title: 'vite-integrated',
    link: 'https://plugins.jetbrains.com/plugin/16897',
    description: 'Vite 脚手架在 JetBrains IDE 中的集成，主要负责直接使用 IDE 的引导面板创建一个项目。',
    topic: ['vite', 'webstorm', 'jetbrains'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/liuli-tools/tree/master/jetbrains-plugins/vite-jetbrains-plugin',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://plugins.jetbrains.com/plugin/16897',
      },
    ],
  },
  {
    title: 'rollup-plugin-i18next-dts-gen',
    link: 'https://www.npmjs.com/package/@liuli-util/rollup-plugin-i18next-dts-gen',
    description: '从 i18n JSON 文件生成类型定义用于代码提示和验证',
    topic: ['rollup', 'i18n', 'typescript'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/rollup-plugin-i18next-dts-gen',
      },
    ],
  },
  {
    title: 'rollup-plugin-graphql-codegen',
    link: 'https://www.npmjs.com/package/@liuli-util/rollup-plugin-graphql-codegen',
    description: '在 worker_threads 中为 GraphQL 文件生成类型定义',
    topic: ['rollup', 'graphql', 'typescript'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/rollup-plugin-graphql-codegen',
      },
    ],
  },
  {
    title: 'vite-plugin-env-dts-gen',
    link: 'https://www.npmjs.com/package/@liuli-util/vite-plugin-env-dts-gen',
    description: '扫描环境变量生成 dts 类型定义，避免手动维护环境变量的 dts 类型定义。',
    topic: ['vite', 'env', 'typescript'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/vite-plugin-env-dts-gen',
      },
    ],
  },
  {
    title: '@liuli-util/react-router',
    link: 'https://www.npmjs.com/package/@liuli-util/react-router',
    description:
      '封装 react-router 为集中式的 js 路由配置，组件仅暴露必要的 props，并且默认支持在 react 组件外使用路由。',
    topic: ['react-router', '集中式路由'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/react-router',
      },
    ],
  },
  {
    title: 'webos',
    link: 'https://webos.rxliuli.com/',
    description: '一个基于 web 的可扩展系统原型，主要用于实践在 web 上运行第三方应用。',
    topic: ['webos', '插件系统'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://webos.rxliuli.com/',
      },
    ],
  },
  {
    title: 'saki',
    link: 'https://github.com/rxliuli/saki',
    description: '想知道基于 golang 编写 cli 能够提高多少性能，所以尝试使用 golang 编写了这个 cli 应用。',
    topic: ['webos', '插件系统'],
    links: [
      {
        title: 'open',
        icon: open,
        link: 'https://github.com/rxliuli/saki',
      },
    ],
  },
  {
    title: 'mdbook',
    link: 'https://www.npmjs.com/package/@liuli-util/mdbook',
    description:
      '一个基于 pandoc 的 markdown => epub 的构建工具，支持使用配置而非命令行参数的形式指定章节文件（也是后面整理和发布小说 epub 版本的前提）',
    topic: ['pandoc', 'markdown', 'epub'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/mdbook/blob/master/apps/cli/README.md',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/package/@liuli-util/mdbook',
      },
    ],
  },
  {
    title: '魔法少女小圆 飞向星空（整理搬运）',
    link: 'https://tts.liuli.moe/',
    description:
      '在经历了几个世纪的动荡之后，一个乌托邦式的 AI— 人类政府治理着地球，预示着后稀缺社会的来临和太空殖民的新时代。一次意外的接触却让科技更先进的敌对外星种族打破了和平，这迫使魔法少女们走出幕后，拯救人类文明。在这一切之中，志筑良子，一个普通的女孩，仰望着星空，好奇着她在宇宙中的归所。',
    topic: ['二次元', '同人', '硬科幻'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/liuli-moe/TtS',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://tts.liuli.moe/',
      },
    ],
  },
]

const PrimaryWork: FunctionalComponent<{ item: Work }> = ({ item }) => {
  return (
    <div className={css.PrimaryWork}>
      <div>
        <a target={'_blank'} href={item.link}>
          <img className={css.cover} src={item.image} alt={item.title} />
        </a>
      </div>
      <section className={css.content}>
        <header>特色项目</header>
        <h3>
          <a target={'_blank'} href={item.link}>
            {item.title}
          </a>
        </h3>
        <ReactMarkdown linkTarget={'_blank'}>{item.description}</ReactMarkdown>
        <footer>
          <ul>
            {item.topic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {item.links.map((item) => (
              <li key={item.link}>
                <LinkIcon item={item} />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </div>
  )
}

const OtherWork: FunctionalComponent<{
  item: Omit<Work, 'image'>
}> = ({ item }) => {
  return (
    <div className={css.OtherWork}>
      <header>
        <div>
          <div className={css.folder} dangerouslySetInnerHTML={{ __html: folder }}></div>
          <ul>
            {item.links.map((item) => (
              <li key={item.link}>
                <LinkIcon item={item} />
              </li>
            ))}
          </ul>
        </div>
        <h3 className={css.subject}>
          <a target={'_blank'} href={item.link}>
            {item.title}
          </a>
        </h3>
        <ReactMarkdown linkTarget={'_blank'}>{item.description}</ReactMarkdown>
      </header>
      <footer>
        <ul className={css.topic}>
          {item.topic.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

export const WorkView = () => {
  return (
    <div id={'work'} className={css.WorkView}>
      <Header order={'03.'}>作品</Header>
      <div>
        {primaryWorks.map((item) => (
          <PrimaryWork item={item} key={item.title} />
        ))}
      </div>
      <div className={css.otherWorks}>
        <header>
          <h2>其他值得注意的项目</h2>
          <a target={'_blank'} href={''}>
            查看列表
          </a>
        </header>
        <div>
          {otherWorks.map((item) => (
            <OtherWork item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
