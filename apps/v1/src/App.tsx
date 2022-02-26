import React from 'react'
import 'normalize.css'
import { RouterView } from '@liuli-util/react-router'
import { Header } from './views/home/component/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RouterView />
    </>
  )
}

export default App
