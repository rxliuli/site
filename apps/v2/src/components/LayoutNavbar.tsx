import css from './LayoutNavbar.module.css'
import logo from '../assets/logo.svg'
import classNames from 'classnames'
import { useEffect, useState } from 'preact/hooks'
import { FunctionalComponent } from 'preact'

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
export const LayoutNavbar: FunctionalComponent<{ sidebar: boolean; onToggle(): void }> = (props) => {
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
        <div className={css.nav}>
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
        </div>
        <div className={css.menu}>
          <button onClick={props.onToggle}>
            <div
              className={classNames(css.menuBox, {
                [css.close]: props.sidebar,
              })}
            />
          </button>
          <aside
            className={classNames(css.menuNav, {
              [css.sidebar]: props.sidebar,
            })}
          >
            <ol>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={props.onToggle}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
            <a target={'_blank'} href={'https://github.com/rxliuli/rxliuli'}>
              源代码
            </a>
          </aside>
        </div>
      </nav>
    </header>
  )
}
