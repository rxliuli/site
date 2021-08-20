import React from 'react'
import 'normalize.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './views/home/component/Header'
import HomePage from './views/home'
import AboutPage from './views/about'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
