import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import css from './ContentItem.module.css'
import { Space } from '../../../components/Space'
import { CreatorConfig } from '../api/CreatorApi'

type ContentItemProps = {
  item: CreatorConfig
}

const Icon: React.FC<{ href: string; title: string }> = (props) => (
  <a target={'_blank'} {...props} className={css.icon}>
    {props.children}
  </a>
)

export const ContentItem: React.FC<ContentItemProps> = (props) => {
  return (
    <div className={css.contentItem}>
      <img src={props.item.img} alt={'img'} />
      <h4>{props.item.title}</h4>
      <ReactMarkdown linkTarget={'_blank'}>{props.item.content}</ReactMarkdown>
      <Space>
        {props.item.home && (
          <Icon href={props.item.home} title={'官网'}>
            <i className="fas fa-home" />
          </Icon>
        )}{' '}
        {props.item.github && (
          <Icon href={props.item.github} title={'GitHub 源码'}>
            <i className="fab fa-github" />
          </Icon>
        )}
      </Space>
    </div>
  )
}
