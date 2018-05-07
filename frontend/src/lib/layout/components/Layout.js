import { node } from 'prop-types'

const Layout = ({ children }) => (
  <div>
    <h3>Header</h3>
    {children}
    <h3>Footer</h3>
  </div>
)

Layout.propTypes = {
  children: node
}

export default Layout
