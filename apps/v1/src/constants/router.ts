import { createHashHistory, RouteConfig } from '@liuli-util/react-router'
import HomeView from '../views/home'
import AboutView from '../views/about'
import NotMatchPage from '../views/404'
import App from '../App'

export const history = createHashHistory()

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: HomeView },
      { path: '/about', component: AboutView },
      { path: '*', component: NotMatchPage },
    ],
  },
]
