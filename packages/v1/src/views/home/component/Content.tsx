import * as React from 'react'
import { ContentItem } from './ContentItem'
import css from './Content.module.css'
import { CreatorConfig } from '../api/CreatorApi'

type ContentProps = {
  list: CreatorConfig[]
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
