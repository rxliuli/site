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

function Banner() {
  return (
    <div className={css.banner}>
      <div className={css.mask}>
        <section className={css.title}>
          <h2>关于吾辈</h2>
          <p>
            吾辈是 rxliuli（中文名是
            琉璃），喜欢现代前端的全沾开发者（曾经的后端开发）
          </p>
          <Space>
            <Icon href={'https://github.com/rxliuli'}>
              <i className="fab fa-github fa-2x" />
            </Icon>
            <Icon href={'https://blog.rxliuli.com/'}>
              <i className="fas fa-blog fa-2x" />
            </Icon>
            <Icon href={'https://twitter.com/rxliuli'}>
              <i className="fab fa-twitter fa-2x" />
            </Icon>
            <Icon href={'https://t.me/rxliuli'}>
              <i className="fab fa-telegram fa-2x" />
            </Icon>
            <Icon href={'mailto:rxliuli@gmail.com'}>
              <i className="fas fa-envelope-square fa-2x" />
            </Icon>
          </Space>
        </section>
      </div>
    </div>
  )
}

import aboutContent from './about.md?raw'
import { Space } from '../../components/Space'

export const AboutPage: React.FC = () => {
  return (
    <div>
      <Banner />
      <ReactMarkdown className={css.content}>{aboutContent}</ReactMarkdown>
    </div>
  )
}
