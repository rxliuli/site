import css from './AboutView.module.css'
import avatar from '../assets/avatar.webp'
import { FunctionalComponent, JSX } from 'preact'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'
import { useLocale } from '../constants/useI18n'

export const Header: FunctionalComponent<{
  order: string
  style?: JSX.CSSProperties
}> = (props) => {
  return (
    <h2 className={css.header} style={props.style}>
      <span>{props.order}</span>
      {props.children}
    </h2>
  )
}

const skillList = ['TypeScript', 'React', 'Vue3', 'Golang', 'DX']

export const AboutView = () => {
  const { ref, inView } = useInView()
  const { t } = useLocale()
  return (
    <div
      id={'about'}
      className={classNames(
        transition.fadedownEnter,
        {
          [transition.fadedownEnterActive]: inView,
        },
        css.AboutView,
      )}
      ref={ref}
    >
      <Header order={'01.'}>{t('about.title')}</Header>
      <section className={css.content}>
        <p>{t('about.desc1')}</p>
        <p>{t('about.desc2')}</p>
        <p>{t('about.desc3')}</p>
        <p>{t('about.recent')}</p>
        <ul className={css.skills}>
          {skillList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className={css.avatar}>
        <img src={avatar} alt={t('about.picture')} />
      </section>
    </div>
  )
}
