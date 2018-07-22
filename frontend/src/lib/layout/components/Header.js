import Link from 'next/link'
import { ShowAt, HideAt } from 'react-with-breakpoints'
import MenuMobile from './MenuMobile'

// This variable is just for testing. DELETE as soon as new pages are created.
const active = 'none'

const Header = () => (
  <header>
    <Link href="/">
      <a>
        <h1>SuperGobierno.com</h1>
      </a>
    </Link>

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
        min-height: 87px;
        font-weight: bold;
      }
      h1 {
        margin: 0;
        font-size: 22px;
        padding: 20px 0 10px 0;
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
        border-bottom: 1px solid #282c37;
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
        padding-bottom: 4px;
      }
      nav.stroke ul li a:after,
      nav ul li a:after {
        position: absolute;
        bottom: 0;
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
    `}</style>
  </header>
)

export default Header
