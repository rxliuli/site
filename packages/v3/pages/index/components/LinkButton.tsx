import { FC } from 'react'
import css from './LinkButton.module.css'

export const LinkButton: FC<{ href: string; style?: React.CSSProperties;children: React.ReactNode }> = (props) => {
  return (
    <a className={css.LinkButton} style={props.style} target={'_blank'} href={props.href}>
      {props.children}
    </a>
  )
}
