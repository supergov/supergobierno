import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import { PORT } from '../server-configs/app'
import { resolvers } from './schemaResolvers'

export function startServer() {
  // Create the graphql server
  const server = new GraphQLServer({
    resolvers,
    typeDefs: path.join(__dirname, './typeDefs/schema.graphql'),
    /**
     * Context that will be used by GraphQL for every Query/Mutation/Subscription
     * NOTE: subscriptions are not yet getting handled
     */
    context({ request }) {
      const req = request || {}
      const query = request && (req.query.query || req.body.query)

      if (query && query.length > 2000) {
        throw new Error('Query too large.')
      }
      if (!req.headers) req.headers = {}

      return {}
    }
  })

  // Start the GraphQL server
  server.start(
    {
      port: PORT,
      cacheControl: true
    },
    ({ port }) => {
      console.log('> API ready on localhost:' + port)
    }
  )
}
