import css from './LayoutNavbar.module.css'
import logo from '../assets/logo.svg'
import clsx from 'clsx'
import { FC } from 'react'
import { TransitionGroup } from './TransitionGroup'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'
import { useWindowScroll } from '../hooks/useWindowScroll'

const links = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '作品', href: '#work' },
  { label: '联系', href: '#concat' },
]

/**
 * 顶部导航栏
 */
export const LayoutNavbar: FC<{ sidebar: boolean; onToggle(): void }> = (props) => {
  const { dir, scrollY } = useWindowScroll()
  const { ref, inView } = useInView()
  return (
    <header
      className={clsx(css.LayoutNavbar, {
        [css.noTop]: scrollY !== 0,
        [css.up]: dir === 'up',
        [css.down]: dir === 'down',
      })}
    >
      <nav className={clsx(css.content)}>
        <a href={'/v2/'}>
          <img src={logo} alt={'logo'} width={42} height={42} />
        </a>
        <div
          className={clsx(
            transition.fadedownEnter,
            {
              [transition.fadedownEnterActive]: inView,
            },
            css.nav,
          )}
        >
          <TransitionGroup>
            <ol
              ref={ref}
              className={clsx(
                transition.fadedownEnter,
                {
                  [transition.fadedownEnterActive]: inView,
                },
                css.links,
              )}
            >
              <TransitionGroup>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </TransitionGroup>
            </ol>
            <div
              style={{
                transitionDelay: '400ms',
              }}
            >
              <a className={css.source} target={'_blank'} href={'https://github.com/rxliuli/rxliuli'}>
                源代码
              </a>
            </div>
          </TransitionGroup>
        </div>
        <div className={css.menu}>
          <button onClick={props.onToggle}>
            <div
              className={clsx(css.menuBox, {
                [css.close]: props.sidebar,
              })}
            />
          </button>
          <aside
            className={clsx(css.menuNav, {
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

