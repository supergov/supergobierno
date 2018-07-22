import { node } from 'prop-types'
import Head from 'next/head'
import { BreakpointsProvider } from 'react-with-breakpoints'
import Header from './Header'
import Footer from './Footer'

const breakpoints = {
  small: 991,
  medium: 768,
  large: 1024
}

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        SuperGobierno, un país sin memoria esta condenado a repetir su historia.
      </title>
      <link rel="stylesheet" href="/static/css/global.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <BreakpointsProvider breakpoints={breakpoints}>
      <Header />
      {children}
      <Footer />
    </BreakpointsProvider>
  </div>
)

Layout.propTypes = {
  children: node
}

export default Layout
