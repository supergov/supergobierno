import React from 'react'

class LoginForm extends React.Component {
  state = {
    token: false
  }
  handleSubmit = () => {
    this.setState({ token: true })
  }
  render() {
    const { token } = this.state
    return (
      <div className="login-form">
        <h1>SG</h1>
        <form>
          <p>Correo electrónico</p>
          <input type="email" name="email" id="email" />
          <div className="submit-token">
            {token ? (
              <p>Token enviado</p>
            ) : (
              <input
                type="submit"
                value="Entrar"
                onClick={
                  this.handleSubmit // Aquí va el ícono
                }
              />
            )}
          </div>
        </form>
        <style jsx>
          {`
            .login-form {
              background-color: #fff;
              text-align: center;
              padding: 7%;
              border-radius: 3px;
              box-shadow: 0px 0px 8px 0px rgba(72, 72, 72, 0.4);
            }
            h1 {
              font-size: 50px;
              font-weight: bold;
              padding: 10% 0;
            }
            form p {
              text-align: center;
              font-weight: bold;
              padding: 3% 0;
            }
            input[type='email' i] {
              background-color: #f6f6f6;
              color: #484848;
              border: 1px solid #989898;
              border-radius: 3px;
              padding: 14px 10px;
              font-size: 18px;
              text-align: center;
              width: 60%;
            }
            .submit-token p {
              color: #484848;
              font-size: 20px;
              font-weight: bold;
              margin: 10% 0;
            }
            input[type='submit' i] {
              background-color: inherit;
              color: #484848;
              font-size: 25px;
              font-weight: bold;
              border: none;
              margin: 10% 0;
              cursor: pointer;
            }
            @media (max-width: 991px) {
              input[type='email' i] {
                width: 70%;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
export default LoginForm
