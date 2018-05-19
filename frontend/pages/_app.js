import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../src/lib/withApollo'
import { Layout } from '../src/lib/layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
