import { Header } from './AboutView'
import css from './WorkView.module.css'
import github from '../assets/github.svg?raw'
import open from '../assets/open.svg?raw'
import joplinUtilsCover from '../assets/joplin-vscode-plugin-cover.webp'
import mamiCover from '../assets/mami.drawio.svg'
import folder from '../assets/folder.svg?raw'
import { FunctionalComponent } from 'preact'
import { LinkIcon, LinkIconItem } from '../components/LinkIcon'
import { useInView } from '../hooks/useInView'
import { TransitionGroup } from '../components/TransitionGroup'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { html as joplinUtilsZhCN } from './works/joplin-utils.zh-CN.md'
import { html as joplinUtilsEnUS } from './works/joplin-utils.en-US.md'
import { html as joplinUtilsJaJP } from './works/joplin-utils.ja-JP.md'
import { html as mamiZhCN } from './works/mami.zh-CN.md'
import { html as mamiEnUS } from './works/mami.en-US.md'
import { html as mamiJaJP } from './works/mami.ja-JP.md'
import { useLocale } from '../constants/useI18n'
import { useMemo } from 'preact/hooks'
import { locales } from '../constants/i18n'

interface Work {
  title: string
  description: string
  link: string
  image: string
  topic: string[]
  links: LinkIconItem[]
}

const PrimaryWork: FunctionalComponent<{ item: Work }> = ({ item }) => {
  const { ref, inView } = useInView()
  const { t } = useLocale()
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
          <header>{t('work.primary.title')}</header>
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
          <div
            className={css.folder}
            dangerouslySetInnerHTML={{ __html: folder }}
          ></div>
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

const extLocales: Record<
  keyof typeof locales,
  Record<'joplinUtils' | 'mami', string>
> = {
  'zh-CN': {
    joplinUtils: joplinUtilsZhCN,
    mami: mamiZhCN,
  },
  'en-US': {
    joplinUtils: joplinUtilsEnUS,
    mami: mamiEnUS,
  },
  'ja-JP': {
    joplinUtils: joplinUtilsJaJP,
    mami: mamiJaJP,
  },
}

console.log(extLocales)

export const WorkView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const { t, lang } = useLocale()

  const primaryWorks: Work[] = useMemo(() => {
    const extLocale = extLocales[lang]
    return [
      {
        title: 'Joplin Utils',
        description: extLocale.joplinUtils,
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
        description: extLocale.mami,
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
  }, [t, lang])
  const otherWorks: Omit<Work, 'image'>[] = useMemo(
    () => [
      {
        title: 'liuli-tools',
        link: 'https://www.npmjs.com/settings/liuli-util/packages',
        description: t('work.liuli-tools.desc'),
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
        description: t('work.new-project.desc'),
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
        description: t('work.tsx.desc'),
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
        description: t('work.vite-integrated.desc'),
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
        description: t('work.react-router.desc'),
        topic: ['react-router', 'centralized route'],
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
        description: t('work.magia.desc'),
        topic: ['kawaii', 'css', 'anime'],
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
        description: t('work.saki.desc'),
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
        description: t('work.mdbook.desc'),
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
        title: t('work.tts.title'),
        link: 'https://tts.liuli.moe/',
        description: t('work.tts.desc'),
        topic: [
          t('work.tts.topic1'),
          t('work.tts.topic2'),
          t('work.tts.topic3'),
        ],
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
    ],
    [t],
  )
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
        <Header order={'03.'}>{t('work.title')}</Header>
        <div>
          {primaryWorks.map((item) => (
            <PrimaryWork item={item} key={item.title} />
          ))}
        </div>
        <div className={css.otherWorks}>
          <header>
            <h2>{t('work.other.title')}</h2>
            <a href={''}>{t('work.other.viewList')}</a>
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
