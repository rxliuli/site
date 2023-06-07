import clsx from 'clsx'
import { useInView } from '../hooks/useInView'
import css from './FooterView.module.css'
import transition from '../components/TransitionGroup.module.css'

export const FooterView = () => {
  const { ref, inView } = useInView()
  return (
    <footer
      ref={ref}
      className={clsx(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: inView,
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
