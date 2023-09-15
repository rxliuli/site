import classNames from 'classnames'
import { LinkButton } from '../components/LinkButton'
import { TransitionGroup } from '../components/TransitionGroup'
import { useInView } from '../hooks/useInView'
import css from './HomeView.module.css'
import transition from '../components/TransitionGroup.module.css'
import { useWindowScroll } from '../hooks/useWindowScroll'
import { useLocale } from '../constants/useI18n'

export const HomeView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const { dir } = useWindowScroll()
  const { t } = useLocale()
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
          <h1>{t('home.hello')}</h1>
          <h2>{t('home.name')}</h2>
          <h2>{t('home.title')}</h2>
          <p>
            {t('home.desc')}{' '}
            <a
              target={'_blank'}
              href={'https://github.com/rxliuli/liuli-tools'}
            >
              {t('home.point')}
            </a>{' '}
            。
          </p>
          <LinkButton href={'https://joplin-utils.rxliuli.com'}>
            {t('home.example')}
          </LinkButton>
        </TransitionGroup>
      </section>
    </div>
  )
}
