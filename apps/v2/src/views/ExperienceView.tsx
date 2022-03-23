import css from './ExperienceView.module.css'
import { Header } from './AboutView'
import { useState } from 'preact/compat'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'
import { TransitionGroup } from '../components/TransitionGroup'

interface Experience {
  name: string
  link: string
  jobTitle: string
  start: string
  stop?: string
  list: string[]
}

const experiences: Experience[] = [
  {
    name: '北京奇岱松',
    link: 'https://www.zhipin.com/gongsi/2328926c2da3d0090XF52tS1GQ~~.html',
    jobTitle: '前端开发工程师',
    start: '2021-07',
    stop: '至今',
    list: [
      '前端工程化和基础建设，包括各种 cli、插件和 library 等',
      'webos 子应用系统的设计实现，协助其他人开发子应用，多线程模型、通信、系统 api',
      '实践和确定了众多技术的可行性，大型 monorepo、vite、esbuild、vue3、pnpm',
    ],
  },
  {
    name: '广州秉理',
    link: 'https://www.ibingli.cn/',
    jobTitle: '前端开发工程师',
    start: '2019.09',
    stop: '2021.03',
    list: [
      '前端项目的基建和大型重构，保证项目在超过 4w 行代码、20 个模块时仍然保持可维护性',
      'lerna 的具体实践和落地，让前端工程演进为 monorepo 形式，支持了上面的大型前端项目',
      '项目规范的编写和推进，使用 `eslint/prettier/git hooks/code review` 的形式校验代码',
      '在前端日志方面做出探索，实现了在部署到医院内网之后前端可以通过日志查找问题',
      '领域限定硬件的调研/第三方服务的接入',
    ],
  },
  {
    name: '广州智晓',
    link: 'http://www.zx-soft.cn',
    jobTitle: 'Java 后端开发',
    start: '2018.03',
    stop: '2019-07',
    list: [
      '学习并在后端团队内推广 vue 这种现代前端框架',
      '使用 Java Spring Boot 开发各种后台管理系统',
      '认识到了很好的同事，至今仍然在通过邮件继续联系',
    ],
  },
]

/**
 * @todo tab 移动效果及显示的显隐效果需要实现
 */
export const ExperienceView = () => {
  const [active, setActive] = useState(experiences[0].name)
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={classNames(transition.fadeupEnter, {
        [transition.fadedownEnterActive]: inView,
      })}
    >
      <TransitionGroup>
        <div id={'experience'} className={css.ExperienceView}>
          <Header order={'02.'}>工作</Header>
          <div className={css.tab}>
            <nav>
              <ul>
                {experiences.map((item) => (
                  <li key={item.name} onClick={() => setActive(item.name)}>
                    <button className={classNames({ [css.active]: item.name === active })}>{item.name}</button>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className={css.content}>
              {experiences.map((item) => (
                <section key={item.name} style={{ display: active === item.name ? 'block' : 'none' }}>
                  <h3>
                    <span>{item.jobTitle}</span>
                    <a href={item.link} target={'_blank'}>
                      {'  '}@{item.name}
                    </a>
                  </h3>
                  <p>
                    {item.start} - {item.stop}
                  </p>
                  <ul>
                    {item.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </ul>
          </div>
        </div>
      </TransitionGroup>
    </div>
  )
}
