import * as React from 'react'
import css from './Banner.module.css'

export const Banner: React.FC = (props) => {
  return (
    <div className={css.banner}>
      <div className={css.mask}>
        <div className={css.content}>{props.children}</div>
      </div>
    </div>
  )
}
