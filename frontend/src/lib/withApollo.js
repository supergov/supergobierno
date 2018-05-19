import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import withApollo from 'next-with-apollo'

const GRAPHQL_URL = 'http://localhost:5000/'

export default withApollo({
  client: () => ({
    cache: new InMemoryCache({
      dataIdFromObject: ({ id, __typename }) =>
        id && __typename ? __typename + id : null
    })
  }),
  link: ({ headers }) => ({
    http: new HttpLink({
      uri: GRAPHQL_URL,
      headers
    }),
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(err =>
          console.log(`[GraphQL error]: Message: ${err.message}`)
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }
  })
})
