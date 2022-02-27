import css from './LayoutNavbar.module.css'
import logo from '../assets/logo.svg'

const links = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '作品', href: '#work' },
  { label: '联系', href: '#concat' },
]

/**
 * 顶部导航栏
 */
export const LayoutNavbar = () => {
  return (
    <nav className={css.LayoutNavbar}>
      <div>
        <img src={logo} alt={'logo'} width={42} height={42} />
      </div>
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
  )
}
