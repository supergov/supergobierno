import next from 'next'
import express from 'express'
import routes from './routes'
import { PORT, DEV_MODE } from './internals'

const app = next({ dev: DEV_MODE })
const handle = routes.getRequestHandler(app)
const server = express()

if (!DEV_MODE) {
  server.enable('trust proxy')
}

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, '0.0.0.0', err => {
    if (err) throw err
    console.log('> Next app ready on localhost:' + PORT)
  })
})
