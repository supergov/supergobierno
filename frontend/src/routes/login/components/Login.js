import Link from 'next/link'
import LoginForm from './LoginForm'

const Login = () => (
  <div className="container-wrapper">
    <div className="login-info">
      <h1>Gracias por aportar a SG</h1>
      <div className="info-text">
        <p>
          SuperGobierno.com funciona con un sistema de seguridad de tokens sin
          contraseñas.
        </p>
        <p>
          Cada que quieras entrar deberás solicitar un token nuevo que expira en
          24 horas si no lo usas.
        </p>
        <p>
          También por seguridad se cerrará tu sesión pasados 30 minutos de
          inactividad.
        </p>
        <p>
          No mostraremos NUNCA tu email y tampoco se te pedirá información
          personal, la principal prioridad es la seguridad y anonimidad de
          nuestros usuarios.
        </p>
        <p>
          Puedes leer nuestra{' '}
          <Link href="">
            <a>Filosofía</a>
          </Link>
          .
        </p>
      </div>
    </div>
    <div className="login-form-container">
      <LoginForm />
      <p className="login-tip">
        Tip: Si eres nuevo(a), revisa tu bandeja de spam, podría llegar allí.
      </p>
    </div>
    <style jsx>
      {`
        .container-wrapper {
          margin: 30px 0px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5%;
          align-items: center;
          font-size: 18px;
        }
        .login-info h1 {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
        .login-info p {
          margin: 18px 5px;
        }
        .login-info a {
          color: inherit;
          font-weight: bold;
        }

        .login-form-container p {
          margin-top: 14px;
          font-style: italic;
          font-size: 14px;
        }
        @media (max-width: 991px) {
          .container-wrapper {
            grid-template-columns: 1fr;
          }
          .login-form-container {
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 20px;
          }
        }
      `}
    </style>
  </div>
)

export default Login
