import css from './LayoutNavbar.module.css'
import logo from '../assets/logo.svg'
import classNames from 'classnames'
import { useEffect, useState } from 'preact/hooks'

const links = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '作品', href: '#work' },
  { label: '联系', href: '#concat' },
]

function useWindowScroll() {
  const [dir, setDir] = useState<'up' | 'down'>()
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const listener = () => {
      const dir = scrollY > window.scrollY ? 'up' : 'down'
      setDir(dir)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [scrollY])
  return { dir, scrollY }
}

/**
 * 顶部导航栏
 */
export const LayoutNavbar = () => {
  const { dir, scrollY } = useWindowScroll()
  return (
    <header
      className={classNames(css.LayoutNavbar, {
        [css.noTop]: scrollY !== 0,
        [css.up]: dir === 'up',
        [css.down]: dir === 'down',
      })}
    >
      <nav className={css.content}>
        <a href={'/v2/'}>
          <img src={logo} alt={'logo'} width={42} height={42} />
        </a>
        <ol className={css.links}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ol>
        <div>
          <a className={css.source} target={'_blank'} href={'https://github.com/rxliuli/rxliuli'}>
            源代码
          </a>
        </div>
      </nav>
    </header>
  )
}
