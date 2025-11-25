import { Hono } from 'hono'
import appleAppSiteAssociation from './assets/apple-app-site-association.json' assert { type: 'json' }

const app = new Hono<{
  Bindings: Cloudflare.Env
}>().get('/.well-known/apple-app-site-association', (c) => c.json(appleAppSiteAssociation))

export default app

