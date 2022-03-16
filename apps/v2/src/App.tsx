import { HomeView } from './views/HomeView'
import { ExperienceView } from './views/ExperienceView'
import { WorkView } from './views/WorkView'
import { ConcatView } from './views/ConcatView'
import { LeftLinks } from './components/LeftLinks'
import { RightMail } from './components/RightMail'
import { AboutView } from './views/AboutView'
import { FooterView } from './views/FooterView'
import { LayoutNavbar } from './components/LayoutNavbar'

export const App = () => {
  return (
    <div>
      {/*<LayoutNavbar />*/}
      <LeftLinks />
      <RightMail />
      <LayoutNavbar />

      <HomeView />
      <AboutView />
      <ExperienceView />
      <WorkView />
      <ConcatView />
      <FooterView />
    </div>
  )
}
