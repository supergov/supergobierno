import Link from 'next/link'
import { ShowAt, HideAt } from 'react-with-breakpoints'
import MenuMobile from './MenuMobile'

// This variable is just for testing. DELETE as soon as new pages are created.
const active = ''

const Header = () => (
  <header>
    <Link href="/">
      <a>
        <h1>SuperGobierno.com</h1>
      </a>
    </Link>
    <div className="search">
      <input type="text" placeholder="Buscar" />
    </div>

    <HideAt breakpoint="small">
      <nav className="stroke">
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
            <Link href="/funcionarios">
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
            <Link href="/login">
              <a className={active === 'login' ? 'active' : 'link-login'}>
                <i className="icon-lock-open-filled" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </HideAt>

    <ShowAt breakpoint="small">
      <MenuMobile />
    </ShowAt>

    <style jsx>{`
      header {
        background-color: #fff;
        color: #282c37;
        text-align: center;
        font-weight: bold;
      }
      h1 {
        margin: 0;
        font-size: 22px;
        padding: 20px 0 10px 0;
      }
      nav {
        padding-bottom: 8px;
      }
      nav li {
        display: inline-block;
        margin: 10px 20px 0 20px;
      }
      nav li a {
        font-weight: normal;
        color: #282c37;
      }
      nav li i {
        font-size: 22px;
        position: absolute;
        bottom: -1px;
        right: -11px;
        color: #505050;
      }

      .active {
        font-weight: bold;
        border-bottom: 2px solid #282c37;
      }
      nav ul li a,
      nav ul li a:after,
      nav ul li a:before {
        transition: all 0.5s;
      }

      /* stroke */
      nav.stroke ul li a,
      nav ul li a {
        position: relative;
        padding-bottom: 2px;
      }
      nav.stroke ul li a:after,
      nav ul li a:after {
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #545454;
        height: 2px;
      }
      nav.stroke ul li a:hover:after {
        width: 100%;
      }
      @media (max-width: 991px) {
        h1 {
          padding-top: 10px;
        }
        .search {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: #fff;
          z-index: 100;
          padding: 7px 0px;
        }
        .search input {
          border-radius: 3px;
          border: 1px solid #ddd;
          padding: 6px 13px;
          outline-color: #c1c1c1;
          font-size: 16px;
        }
      }
    `}</style>
  </header>
)

export default Header
