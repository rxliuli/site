import css from './LeftLinks.module.css'
import blog from '../assets/blog.svg?raw'
import telegram from '../assets/telegram.svg?raw'
import github from '../assets/github.svg?raw'
import twitter from '../assets/twitter.svg?raw'

interface Link {
  name: string
  url: string
  icon: string
}

const links: Link[] = [
  { name: 'github', url: 'https://github.com/rxliuli', icon: github },
  { name: 'twitter', url: 'https://twitter.com/rxliuli', icon: twitter },
  { name: 'telegram', url: 'https://t.me/rxliuli', icon: telegram },
  { name: 'blog', url: 'https://blog.rxliuli.com/', icon: blog },
]

export const LeftLinks = () => {
  return (
    <div className={css.LeftLinks}>
      <ul>
        {links.map((item) => (
          <li>
            <a target={'_blank'} href={item.url} dangerouslySetInnerHTML={{ __html: item.icon }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
