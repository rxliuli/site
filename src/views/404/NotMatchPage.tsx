import * as React from 'react'
import { Link } from 'react-router-dom'
import css from './NotMatchPage.module.css'
import { randomImage } from './util/randomImage'

export const NotMatchPage: React.FC = () => {
  return (
    <div
      className={css.notMatchPage}
      style={{
        backgroundImage: `url(${randomImage()})`,
      }}
    >
      <div className={css.mask}>
        <section className={css.content}>
          <Link to={'/'}>
            <img
              className={css.logo}
              src={'https://blog.rxliuli.com/medias/avatar.jpg'}
              alt={'avatar'}
            />
          </Link>
          <p>对不起，您要找的页面走丢了 (～￣▽￣)～</p>
        </section>
        <footer>MIT Licensed | Copyright © 2021-present rxliuli</footer>
      </div>
    </div>
  )
}
