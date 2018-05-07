/**
 * Routes for the app, this is the only file used by both server and client
 */
import nextRoutes from 'next-routes'

const routes = nextRoutes()
const { Link, Router } = routes

routes.add('home', '/', '/')

export { Link, Router }
export default routes
