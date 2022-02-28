import css from './ExperienceView.module.css'
import { Header } from './AboutView'

export const ExperienceView = () => {
  return (
    <div className={css.ExperienceView}>
      <Header order={'02.'}>工作</Header>
      <nav>
        <ul>
          <li>北京奇岱松科技有限公司</li>
          <li>广州秉理科技有限公司</li>
          <li>广州智晓软件科技有限公司</li>
        </ul>
      </nav>
    </div>
  )
}
