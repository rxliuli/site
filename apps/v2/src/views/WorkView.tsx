import { Header } from './AboutView'
import css from './WorkView.module.css'
import github from '../assets/github.svg?raw'
import open from '../assets/open.svg?raw'
import joplin from '../assets/joplin-vscode-plugin-cover.png'
import { FunctionalComponent } from 'preact'
import ReactMarkdown from 'react-markdown'

interface Work {
  title: string
  description: string
  link: string
  image: string
  topic: string[]
  links: {
    title: string
    link: string
    icon: string
  }[]
}

const primaryWorks: Work[] = [
  {
    title: 'Joplin Utils',
    description: `基于 Joplin 的周边社区工具。[joplin-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin) 提供在 vscode 中管理 joplin 笔记的功能，结合 vscode 现有的强大编辑器及其生态。[joplin-blog](https://www.npmjs.com/package/joplin-blog) 将指定标签的笔记发布为在线网站，可以选择 blog 或 wiki 的形式。还有开发者相关的一些工具集，包括 [joplin-api](https://www.npmjs.com/package/joplin-api)/[joplin-plugin-cli](https://www.npmjs.com/package/joplin-plugin-cli)。`,
    image: joplin,
    link: 'https://joplin-utils.rxliuli.com/',
    topic: ['VS Code', 'Joplin', 'Hexo', 'Vuepress', 'Chrome'],
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
]

const PrimaryWork: FunctionalComponent<{ item: Work }> = ({ item }) => {
  return (
    <div className={css.PrimaryWork}>
      <img className={css.cover} src={item.image} alt={item.title} />
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
                <a href={item.link} target="_blank" dangerouslySetInnerHTML={{ __html: item.icon }} />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </div>
  )
}

export const WorkView = () => {
  return (
    <div id={'work'} className={css.WorkView}>
      <Header order={'03.'}>作品</Header>
      {primaryWorks.map((item) => (
        <PrimaryWork item={item} key={item.title} />
      ))}
    </div>
  )
}
