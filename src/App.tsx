import React from 'react'
import 'normalize.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './views/home/component/Header'
import HomePage from './views/home'
import AboutPage from './views/about'
import { NotMatchPage } from './views/404'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact={true}>
          <HomePage />
        </Route>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'*'}>
          <NotMatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
