import { FunctionalComponent, JSX } from 'preact'
import css from './LinkButton.module.css'

export const LinkButton: FunctionalComponent<{ href: string; style?: JSX.CSSProperties }> = (props) => {
  return (
    <a className={css.LinkButton} style={props.style} target={'_blank'} href={props.href}>
      {props.children}
    </a>
  )
}
