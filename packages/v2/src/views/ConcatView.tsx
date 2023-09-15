import { LinkButton } from '../components/LinkButton'
import { useInView } from '../hooks/useInView'
import css from './ConcatView.module.css'
import transition from '../components/TransitionGroup.module.css'
import classNames from 'classnames'
import { useLocale } from '../constants/useI18n'

export const ConcatView = () => {
  const { ref, inView } = useInView()
  const { t } = useLocale()
  return (
    <div
      id={'concat'}
      className={classNames(
        transition.fadedownEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.ConcatView,
      )}
      ref={ref}
    >
      <header>
        <h2>
          <span>04.</span> {t('concat.next')}
        </h2>
        <h2>{t('concat.subtitle')}</h2>
      </header>
      <footer>{t('concat.desc')}</footer>
      <LinkButton href={'mailto:rxliuli@gmail.com'}>
        {t('concat.hello')}
      </LinkButton>
    </div>
  )
}
