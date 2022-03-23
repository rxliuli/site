import css from './LeftLinks.module.css'
import blog from '../assets/blog.svg?raw'
import telegram from '../assets/telegram.svg?raw'
import github from '../assets/github.svg?raw'
import twitter from '../assets/twitter.svg?raw'
import { LinkIcon, LinkIconItem } from './LinkIcon'
import { useScrollView } from '../hooks/useScrollView'
import transition from '../components/TransitionGroup.module.css'
import classNames from 'classnames'

const links: LinkIconItem[] = [
  { title: 'github', link: 'https://github.com/rxliuli', icon: github },
  { title: 'twitter', link: 'https://twitter.com/rxliuli', icon: twitter },
  { title: 'telegram', link: 'https://t.me/rxliuli', icon: telegram },
  { title: 'blog', link: 'https://blog.rxliuli.com/', icon: blog },
]

export const LeftLinks = () => {
  const { ref, scrollView } = useScrollView({ timeout: 1000 })
  return (
    <div
      ref={ref}
      className={classNames(
        transition.fadeEnter,
        {
          [transition.fadeEnterActive]: scrollView,
        },
        css.LeftLinks,
      )}
    >
      <ul>
        {links.map((item) => (
          <li>
            <LinkIcon item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
