import css from './RightMail.module.css'
import transition from '../components/TransitionGroup.module.css'
import classNames from 'classnames'
import { useScrollView } from '../hooks/useScrollView'

export const RightMail = () => {
  const { ref, scrollView } = useScrollView({ timeout: 1000 })
  return (
    <div
      ref={ref}
      className={classNames(
        transition.fadeEnter,
        {
          [transition.fadeEnterActive]: scrollView,
        },
        css.RightMail,
      )}
    >
      <a target={'_blank'} href={'mailto:rxliuli@gmail.com'}>
        rxliuli@gmail.com
      </a>
    </div>
  )
}
