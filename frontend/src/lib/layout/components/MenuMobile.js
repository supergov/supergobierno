import Link from 'next/link'
import React from 'react'
// This variable is just for testing. DELETE as soon as new pages are created.
const active = 'none'

class MenuMobile extends React.Component {
  OpenMenu = () => {
    if (document.body.classList.contains('menu-open')) {
      document.body.classList.remove('menu-open')
    } else {
      document.body.classList.add('menu-open')
    }
  }
  render() {
    return (
      <label>
        <input type="checkbox" />
        <span className="menu" onClick={this.OpenMenu}>
          <span className="hamburger" />
        </span>
        <ul>
          <li>
            <Link href="/lideres">
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
            <Link href="/login">
              <a className={active === 'login' ? 'active' : 'link-login'}>
                Login
              </a>
            </Link>
          </li>
        </ul>

        <style jsx>{`
          label .menu {
            position: fixed;
            right: -100px;
            top: -100px;
            z-index: 100;
            width: 185px;
            height: 157px;
            background: #fff;
            border-radius: 50% 50% 50% 50%;
            transition: 0.5s ease-in-out;
            box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
            cursor: pointer;
          }
          label .hamburger {
            position: absolute;
            top: 131px;
            left: 38px;
            width: 30px;
            height: 2px;
            background: #000;
            display: block;
            -webkit-transform-origin: center;
            transform-origin: center;
            transition: 0.5s ease-in-out;
          }
          label .hamburger:after,
          label .hamburger:before {
            transition: 0.5s ease-in-out;
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            background: #000;
          }
          label .hamburger:before {
            top: -8px;s
          }
          label .hamburger:after {
            bottom: -8px;
          }
          label input {
            display: none;
          }
          label input:checked + .menu {
            box-shadow: 0 0 0 100vw #fff, 0 0 0 100vh #fff;
            border-radius: 0;
          }
          label input:checked + .menu .hamburger {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          label input:checked + .menu .hamburger:after {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            bottom: 0;
          }
          label input:checked + .menu .hamburger:before {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            top: 0;
          }
          label input:checked + .menu + ul {
            opacity: 1;
            z-index: 200;
          }
          label ul {
            position: fixed;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: 0.25s 0s ease-in-out;
            width: 100%;
          }
          label a {
            margin-bottom: 35px;
            display: block;
            color: #464646;
            font-size: 22px;
          }
        `}</style>
      </label>
    )
  }
}

export default MenuMobile
