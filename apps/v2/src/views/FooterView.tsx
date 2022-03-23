import classNames from 'classnames'
import { useScrollView } from '../hooks/useScrollView'
import css from './FooterView.module.css'
import transition from '../components/TransitionGroup.module.css'

export const FooterView = () => {
  const { ref, scrollView } = useScrollView()
  return (
    <footer
      ref={ref}
      className={classNames(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: scrollView,
        },
        css.FooterView,
      )}
    >
      由{' '}
      <a target={'_blank'} href={'https://github.com/bchiang7/v4'}>
        bchiang7
      </a>{' '}
      设计，但吾辈重新实现了它。
    </footer>
  )
}
