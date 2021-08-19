import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import css from './ContentItem.module.css'
import { Space } from '../../../components/Space'

export interface CreatorCard {
  img: string
  title: string
  content: string
  github?: string
  home?: string
}

type ContentItemProps = {
  item: CreatorCard
}

export const ContentItem: React.FC<ContentItemProps> = (props) => {
  return (
    <div className={css.creatorCard}>
      <img src={props.item.img} alt={'img'} />
      <h4>{props.item.title}</h4>
      <ReactMarkdown linkTarget={'_blank'}>{props.item.content}</ReactMarkdown>
      <Space>
        <a href={props.item.home} target={'_blank'}>
          <i className="fas fa-home" />
        </a>
        <a href={props.item.github} target={'_blank'}>
          <i className="fab fa-github" />
        </a>
      </Space>
    </div>
  )
}
