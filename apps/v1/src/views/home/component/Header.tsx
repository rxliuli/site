import { Link } from '@liuli-util/react-router'
import * as React from 'react'
import css from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <Link to={'/'} className={css.logo}>
            <img
              src={'https://blog.rxliuli.com/medias/avatar.jpg'}
              alt={'avatar'}
              className={css.avatar}
            />
            琉璃的个人主页
          </Link>
          <span />
          <Link to={'/about'}>关于</Link>
        </nav>
      </header>
      <div className={css.placeholder} />
    </>
  )
}
