import { Header } from './AboutView'
import css from './WorkView.module.css'
import github from '../assets/github.svg?raw'
import open from '../assets/open.svg?raw'
import joplin from '../assets/joplin-vscode-plugin-cover.webp'
import liuliCli from '../assets/liuli-cli-cover.webp'
import folder from '../assets/folder.svg?raw'
import { FunctionalComponent, JSX } from 'preact'
import { LinkIcon, LinkIconItem } from '../components/LinkIcon'
import { useInView } from '../hooks/useInView'
import { TransitionGroup } from '../components/TransitionGroup'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { html as mdJoplinUtils } from './works/joplin-utils.md'
import { html as mdLiuliCli } from './works/liuli-cli.md'

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
    description: mdJoplinUtils,
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
    description: mdLiuliCli,
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
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={classNames(
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

const OtherWork: FunctionalComponent<{
  item: Omit<Work, 'image'>
}> = ({ item }) => {
  const { ref, inView } = useInView()
  return (
    <li
      ref={ref}
      className={classNames(
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
      className={classNames(
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
