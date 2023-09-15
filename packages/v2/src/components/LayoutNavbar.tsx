import css from './LayoutNavbar.module.css'
import logo from '../assets/logo.svg'
import classNames from 'classnames'
import { FunctionalComponent } from 'preact'
import { TransitionGroup } from './TransitionGroup'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'
import { useWindowScroll } from '../hooks/useWindowScroll'
import { useLocale } from '../constants/useI18n'
import { useMemo } from 'preact/hooks'

/**
 * 顶部导航栏
 */
export const LayoutNavbar: FunctionalComponent<{
  sidebar: boolean
  onToggle(): void
}> = (props) => {
  const { t } = useLocale()
  const links = useMemo(
    () => [
      { label: t('about.title'), href: '#about' },
      { label: t('experience.title'), href: '#experience' },
      { label: t('work.title'), href: '#work' },
      { label: t('concat.title'), href: '#concat' },
    ],
    [t],
  )
  const { dir, scrollY } = useWindowScroll()
  const { ref, inView } = useInView()
  return (
    <header
      className={classNames(css.LayoutNavbar, {
        [css.noTop]: scrollY !== 0,
        [css.up]: dir === 'up',
        [css.down]: dir === 'down',
      })}
    >
      <nav className={classNames(css.content)}>
        <a href={'/v2/'}>
          <img src={logo} alt={'logo'} width={42} height={42} />
        </a>
        <div
          className={classNames(
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
              className={classNames(
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
              <a
                className={css.source}
                target={'_blank'}
                href={'https://github.com/rxliuli/rxliuli'}
              >
                {t('navbar.source')}
              </a>
            </div>
          </TransitionGroup>
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
              {t('navbar.source')}
            </a>
          </aside>
        </div>
      </nav>
    </header>
  )
}
