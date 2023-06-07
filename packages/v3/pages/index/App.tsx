import { HomeView } from './views/HomeView'
import { ExperienceView } from './views/ExperienceView'
import { WorkView } from './views/WorkView'
import { ConcatView } from './views/ConcatView'
import { LeftLinks } from './components/LeftLinks'
import { RightMail } from './components/RightMail'
import { AboutView } from './views/AboutView'
import { FooterView } from './views/FooterView'
import { LayoutNavbar } from './components/LayoutNavbar'
import css from './App.module.css'
import { useState } from 'react'
import clsx from 'clsx'

export const App = () => {
  const [sidebar, setSidebar] = useState(false)

  function onToggle() {
    document.body.style.overflowY = sidebar ? 'auto' : 'hidden'
    setSidebar(!sidebar)
  }

  return (
    <div>
      <LayoutNavbar sidebar={sidebar} onToggle={onToggle} />
      <LeftLinks />
      <RightMail />
      <main
        className={clsx(css.main, {
          [css.filter]: sidebar,
        })}
      >
        <HomeView />
        <AboutView />
        <ExperienceView />
        <WorkView />
        <ConcatView />
      </main>
      <div
        className={clsx(css.mask, { [css.show]: sidebar })}
        onClick={() => {
          console.log('sidebar && onToggle(): ', sidebar)
          sidebar && onToggle()
        }}
      />
      <FooterView />
    </div>
  )
}
