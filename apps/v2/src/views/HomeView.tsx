import classNames from 'classnames'
import { LinkButton } from '../components/LinkButton'
import { TransitionGroup } from '../components/TransitionGroup'
import { useInView } from '../hooks/useInView'
import css from './HomeView.module.css'
import transition from '../components/TransitionGroup.module.css'
import { useWindowScroll } from '../hooks/useWindowScroll'

export const HomeView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const { dir } = useWindowScroll()
  return (
    <div className={css.HomeView} ref={ref}>
      <section
        className={classNames(
          transition.fadeupEnter,
          {
            [transition.fadeupEnterActive]: inView,
          },
          css.content,
        )}
      >
        <TransitionGroup timeout={dir ? 0 : 500}>
          <h1>你好，吾辈名为</h1>
          <h2>琉璃</h2>
          <h2>吾辈基于 web 技术创造各种东西</h2>
          <p>
            现在是一个前端开发工程师，喜欢折腾有趣的技术、二次元、开源和分享，目前专注于{' '}
            <a target={'_blank'} href={'https://github.com/rxliuli/liuli-tools'}>
              前端工程化
            </a>{' '}
            。
          </p>
          <LinkButton href={'https://webos.rxliuli.com'}>看看 webos</LinkButton>
        </TransitionGroup>
      </section>
    </div>
  )
}
