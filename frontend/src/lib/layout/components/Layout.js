import { node } from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <style global jsx>
      {`
        body {
          background-color: #f6f6f6;
          margin: 0;
          font-family: 'Arial';
        }
      `}
    </style>
  </div>
)

Layout.propTypes = {
  children: node
}

export default Layout
