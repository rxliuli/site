import classNames from 'classnames'
import { useInView } from '../hooks/useInView'
import css from './FooterView.module.css'
import transition from '../components/TransitionGroup.module.css'
import { useLocale } from '../constants/useI18n'

export const FooterView = () => {
  const { ref, inView } = useInView()
  const { t } = useLocale()
  return (
    <footer
      ref={ref}
      className={classNames(
        transition.fadeupEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.FooterView,
      )}
      dangerouslySetInnerHTML={{ __html: t('concat.footer') }}
    ></footer>
  )
}
