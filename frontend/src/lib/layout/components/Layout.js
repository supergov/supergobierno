import { node } from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        SuperGobierno, un país sin memoria esta condenado a repetir su historia.
      </title>
      <link rel="stylesheet" href="/static/css/global.css" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: node
}

export default Layout
