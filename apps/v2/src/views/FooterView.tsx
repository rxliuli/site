import css from './FooterView.module.css'

export const FooterView = () => {
  return (
    <footer className={css.FooterView}>
      由{' '}
      <a target={'_blank'} href={'https://github.com/bchiang7/v4'}>
        bchiang7
      </a>{' '}
      设计，但吾辈重新实现了它。
    </footer>
  )
}
