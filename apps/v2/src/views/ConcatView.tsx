import { LinkButton } from '../components/LinkButton'
import css from './ConcatView.module.css'

export const ConcatView = () => {
  return (
    <div id={'concat'} className={css.ConcatView}>
      <header>
        <h2>
          <span>04.</span> 下一步是什么？
        </h2>
        <h2>保持联系</h2>
      </header>
      <footer>
        虽然吾辈目前没有寻找任何新的机会，但吾辈的邮箱始终是打开的。无论您有任何问题或只是想打个招呼，不管是二次元还是开发者，吾辈都会尽力回复您！
      </footer>
      <LinkButton href={'mailto:rxliuli@gmail.com'}>打个招呼</LinkButton>
    </div>
  )
}
