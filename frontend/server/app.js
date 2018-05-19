const next = require('next')
const express = require('express')
const routes = require('./routes').default
const { PORT, DEV_MODE } = require('./internals')

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
