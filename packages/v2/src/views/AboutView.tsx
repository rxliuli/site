import css from './AboutView.module.css'
import avatar from '../assets/avatar.webp'
import { FunctionalComponent, JSX } from 'preact'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'

export const Header: FunctionalComponent<{ order: string; style?: JSX.CSSProperties }> = (props) => {
  return (
    <h2 className={css.header} style={props.style}>
      <span>{props.order}</span>
      {props.children}
    </h2>
  )
}

const skillList = ['TypeScript', 'React', 'Vue3', 'Golang', '工程化']

export const AboutView = () => {
  const { ref, inView } = useInView()
  return (
    <div
      id={'about'}
      className={classNames(
        transition.fadedownEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.AboutView,
      )}
      ref={ref}
    >
      <Header order={'01.'}>关于</Header>
      <section className={css.content}>
        <p>
          你好，吾辈是 rxliuli，中文名是琉璃。吾辈曾经是一个 Java CURD
          研发工程师，后面感觉现代前端日新月异，有许多新奇的东西，所以在 2019 年正式转换为前端工作。
        </p>
        <p>
          快进到今天，吾辈现在在一个做着类似于 webos
          东西的公司，可以花更多的时间来做一些长线的事情，像是各种前端工程化的基建，以及基于 web 的应用平台研发。
        </p>
        <p>虽然公司使用了 vue3+typescript，但吾辈更喜欢 react，所以社区项目仍然继续使用它开发。</p>
        <p>以下是最近一直在使用的一些技术：</p>
        <ul className={css.skills}>
          {skillList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className={css.avatar}>
        <img src={avatar} alt={'我的照片'} />
      </section>
    </div>
  )
}
