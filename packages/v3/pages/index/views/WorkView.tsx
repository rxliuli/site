import { Header } from './AboutView'
import css from './WorkView.module.css'
import github from '../assets/github.svg?raw'
import open from '../assets/open.svg?raw'
import joplinUtilsCover from '../assets/joplin-vscode-plugin-cover.webp'
import mamiCover from '../assets/mami.drawio.svg'
import folder from '../assets/folder.svg?raw'
import { FC } from 'react'
import { LinkIcon, LinkIconItem } from '../components/LinkIcon'
import { useInView } from '../hooks/useInView'
import { TransitionGroup } from '../components/TransitionGroup'
import clsx from 'clsx'
import transition from '../components/TransitionGroup.module.css'
import { html as joplinUtilsMD } from './works/joplin-utils.md'
import { html as mamiMD } from './works/mami.md'

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
    description: joplinUtilsMD,
    image: joplinUtilsCover,
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
    title: 'mami',
    description: mamiMD,
    image: mamiCover,
    link: 'https://mami.rxliuli.com/',
    topic: ['cli', 'markdown', 'convert'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/mami',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://mami.rxliuli.com/',
      },
    ],
  },
]

const otherWorks: Omit<Work, 'image'>[] = [
  {
    title: 'liuli-tools',
    link: 'https://www.npmjs.com/settings/liuli-util/packages',
    description:
      '一系列与开发者相关的模块，包括通用函数库、cli 以及 esbuild/vite 的插件，旨在解决开发中遇到的各种通用问题。',
    topic: ['lib', 'typescript', 'esbuild', 'vite'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/liuli-tools',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://www.npmjs.com/settings/liuli-util/packages',
      },
    ],
  },
  {
    title: 'new-project',
    link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.new-project',
    description:
      '这是一个 vscode 可视化创建项目的插件，尝试在 vscode 中提供类似于 jetbrains ide 的创建项目的面板。目前仅支持使用 vite/create-react-app/angular/svelte 创建项目，但支持自定义生成器。',
    topic: ['vscode', 'project-template'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/new-project',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.new-project',
      },
    ],
  },
  {
    title: 'tsx',
    link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.tsx',
    description: 'esbuild-kit/tsx 的 vscode 集成，可以运行任何 js/ts/jsx/tsx 代码，支持 esm/cjs 模块。',
    topic: ['vscode', 'typescript', 'esbuild'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/tsx-vscode',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.tsx',
      },
    ],
  },
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
    title: 'magia',
    link: 'https://magia.rxliuli.com/',
    description: '一个复刻的可爱的动画网站（魔法少女小圆），源项目是 https://magia.cyris.moe/。',
    topic: ['可愛い', 'css', '动画'],
    links: [
      {
        title: 'github',
        icon: github,
        link: 'https://github.com/rxliuli/magia',
      },
      {
        title: 'open',
        icon: open,
        link: 'https://magia.rxliuli.com/',
      },
    ],
  },
  {
    title: 'saki',
    link: 'https://github.com/rxliuli/saki',
    description: '想知道基于 golang 编写 cli 能够提高多少性能，所以尝试使用 golang 编写了这个 cli 应用。',
    topic: ['golang'],
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
    title: '魔法少女小圆 飞向星空',
    link: 'https://tts.liuli.moe/',
    description:
      '“丘比承诺说人类总有一天也能到达那遥远的星空。但它们很明智地没有说出来，人类将会在那里遇到什么。”—— 引言',
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

const PrimaryWork: FC<{ item: Work }> = ({ item }) => {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={clsx(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.PrimaryWork,
      )}
    >
      <div className={css.projectImage}>
        <a target={'_blank'} href={item.link}>
          <img className={css.cover} src={item.image} alt={item.title} />
        </a>
      </div>
      <div className={css.projectContent}>
        <section className={css.content}>
          <header>特色项目</header>
          <h3>
            <a target={'_blank'} href={item.link}>
              {item.title}
            </a>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
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
    </div>
  )
}

const OtherWork: FC<{
  item: Omit<Work, 'image'>
}> = ({ item }) => {
  const { ref, inView } = useInView()
  return (
    <li
      ref={ref}
      className={clsx(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.OtherWork,
      )}
    >
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
        <div>{item.description}</div>
      </header>
      <footer>
        <ul className={css.topic}>
          {item.topic.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </footer>
    </li>
  )
}

export const WorkView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  return (
    <div
      id={'work'}
      className={clsx(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.WorkView,
      )}
      ref={ref}
    >
      <TransitionGroup>
        <Header order={'03.'}>作品</Header>
        <div>
          {primaryWorks.map((item) => (
            <PrimaryWork item={item} key={item.title} />
          ))}
        </div>
        <div className={css.otherWorks}>
          <header>
            <h2>其他值得注意的项目</h2>
            <a href={''}>查看列表</a>
          </header>
          <ul className={css.projectsGrid}>
            {otherWorks.map((item) => (
              <OtherWork item={item} key={item.title} />
            ))}
          </ul>
        </div>
      </TransitionGroup>
    </div>
  )
}
