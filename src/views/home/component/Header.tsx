import * as React from 'react'
import { Link } from 'react-router-dom'
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
            琉璃的创造物
          </Link>
          <a href={'https://github.com/rxliuli'} target={'_blank'}>
            GitHub
          </a>
          <span />
          <Link to={'/about'}>关于</Link>
        </nav>
      </header>
      <div className={css.placeholder} />
    </>
  )
}
