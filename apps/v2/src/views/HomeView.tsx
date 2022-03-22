import classNames from 'classnames'
import { LinkButton } from '../components/LinkButton'
import { useScrollView } from '../hooks/useScrollView'
import css from './HomeView.module.css'

export const HomeView = () => {
  const { ref, scrollView } = useScrollView()
  return (
    <div className={css.HomeView} ref={ref}>
      <section
        className={classNames(css.content, {
          [css.inView]: scrollView,
        })}
      >
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
      </section>
    </div>
  )
}
