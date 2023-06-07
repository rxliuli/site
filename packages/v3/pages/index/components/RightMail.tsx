import css from './RightMail.module.css'
import transition from '../components/TransitionGroup.module.css'
import clsx from 'clsx'
import { useInView } from '../hooks/useInView'

export const RightMail = () => {
  const { ref, inView } = useInView({ timeout: 1000 })
  return (
    <div
      ref={ref}
      className={clsx(
        transition.fadeEnter,
        {
          [transition.fadeEnterActive]: inView,
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
