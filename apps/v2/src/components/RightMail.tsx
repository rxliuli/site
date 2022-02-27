import css from './RightMail.module.css'

export const RightMail = () => {
  return (
    <div className={css.RightMail}>
      <a target={'_blank'} href={'mailto:rxliuli@gmail.com'}>
        rxliuli@gmail.com
      </a>
    </div>
  )
}
