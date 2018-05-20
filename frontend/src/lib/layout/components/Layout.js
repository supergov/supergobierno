import { node } from 'prop-types'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <h3>Header</h3>
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: node
}

export default Layout
