import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import css from './AboutPage.module.css'

const Icon: React.FC<{
  href: string
}> = (props) => (
  <a href={props.href} target={'_blank'} className={css.icon}>
    {props.children}
  </a>
)

function AboutBanner() {
  return (
    <Banner>
      <h1>关于吾辈</h1>
      <h2>
        吾辈是 rxliuli（中文名是
        琉璃），喜欢现代前端的全沾开发者（曾经的后端开发）
      </h2>
      <Space>
        <Icon href={'https://github.com/rxliuli'}>
          <i className="fab fa-github" />
        </Icon>
        <Icon href={'https://blog.rxliuli.com/'}>
          <i className="fas fa-blog" />
        </Icon>
        <Icon href={'https://twitter.com/rxliuli'}>
          <i className="fab fa-twitter" />
        </Icon>
        <Icon href={'https://t.me/rxliuli'}>
          <i className="fab fa-telegram" />
        </Icon>
        <Icon href={'mailto:rxliuli@gmail.com'}>
          <i className="fas fa-envelope-square" />
        </Icon>
      </Space>
    </Banner>
  )
}

import aboutContent from './about.md?raw'
import { Space } from '../../components/Space'
import { Banner } from '../home/component/Banner'

export const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutBanner />
      <ReactMarkdown className={css.content}>{aboutContent}</ReactMarkdown>
    </div>
  )
}
