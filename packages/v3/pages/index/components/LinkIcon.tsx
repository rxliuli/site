import { FC } from 'react'
import css from './LinkIcon.module.css'

export interface LinkIconItem {
  title: string
  link: string
  icon: string
}

export const LinkIcon: FC<{ item: LinkIconItem }> = ({ item }) => {
  return <a className={css.LinkIcon} href={item.link} target="_blank" dangerouslySetInnerHTML={{ __html: item.icon }} />
}
