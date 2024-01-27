import {
  LocationProvider,
  Route,
  Router,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import './style.css'
import { HomeView } from './pages/home'
import { NotFound as NotFoundView } from './pages/_404'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={HomeView} />
        <Route default component={NotFoundView} />
      </Router>
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
