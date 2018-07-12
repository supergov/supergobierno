import Link from 'next/link'

// This variable is just for testing. DELETE as soon as new pages are created.
const active = 'none'

const Header = () => (
  <header>
    <h3>SuperGobierno.com</h3>
    <div className="nav">
      <ul>
        <li>
          <Link href="">
            <a className={active === 'lideres' ? 'active' : 'link-lideres'}>
              Líderes asesinados
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={active === 'regalias' ? 'active' : 'link-regalias'}>
              Regalías
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a
              className={
                active === 'presidentes' ? 'active' : 'link-presidentes'
              }
            >
              Presidentes
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a
              className={
                active === 'funcionarios' ? 'active' : 'link-funcionarios'
              }
            >
              Funcionarios
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={active === 'login' ? 'active' : 'link-login'}> # </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      header {
        background-color: #fff;
        color: #282c37;
        text-align: center;
        min-height: 94px;
      }
      h3 {
        margin: 0;
        font-size: 22px;
        padding: 20px 0 10px 0;
      }
      .nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .nav li {
        display: inline-block;
        margin: 10px 20px 0 20px;
      }
      .nav li a {
        display: block;
        text-decoration: none;
        text-align: center;
        color: inherit;
        padding-bottom: 3px;
      }
      .nav li a:hover {
        border-bottom: 1px solid #282c37;
      }
      .active {
        font-weight: bold;
        border-bottom: 1px solid #282c37;
      }
    `}</style>
  </header>
)

export default Header
