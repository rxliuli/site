import { FunctionalComponent } from 'preact'
import css from './LinkButton.module.css'

export const LinkButton: FunctionalComponent<{ href: string }> = (props) => {
  return (
    <a className={css.LinkButton} target={'_blank'} href={props.href}>
      {props.children}
    </a>
  )
}
