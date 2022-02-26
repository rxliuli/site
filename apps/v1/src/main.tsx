import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import './main.css'
import { ReactRouter } from '@liuli-util/react-router'
import { history, routes } from './constants/router'

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter history={history} routes={routes} />
  </React.StrictMode>,
  document.getElementById('root'),
)
