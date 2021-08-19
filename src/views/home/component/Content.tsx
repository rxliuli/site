import * as React from 'react'
import { ContentItem, CreatorCard } from './ContentItem'
import css from './Content.module.css'

type ContentProps = {
  list: CreatorCard[]
}

export const Content: React.FC<ContentProps> = (props) => {
  return (
    <div className={css.content}>
      {props.list.map((item) => (
        <ContentItem item={item} key={item.title} />
      ))}
    </div>
  )
}
