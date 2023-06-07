import { FunctionalComponent } from 'preact'
import css from './LinkIcon.module.css'

export interface LinkIconItem {
  title: string
  link: string
  icon: string
}

export const LinkIcon: FunctionalComponent<{ item: LinkIconItem }> = ({ item }) => {
  return <a className={css.LinkIcon} href={item.link} target="_blank" dangerouslySetInnerHTML={{ __html: item.icon }} />
}
