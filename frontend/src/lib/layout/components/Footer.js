const Footer = () => (
  <div className="footer-container">
    <div>
      <a href="" className="home-link">
        SuperGobierno.com
      </a>
      <a href="">Algunos derechos reservados</a>
    </div>

    <div>
      <a href="">Líderes asesinados</a>
      <a href="">Regalías</a>
      <a href="">Presidentes</a>
      <a href="">Funcionarios</a>
    </div>

    <div>
      <a href="">Quiénes somos</a>
      <a href="">Aviso legal</a>
      <a href="">Filosofía</a>
      <a href="">Contáctanos</a>
    </div>

    <div>
      <a href="">Github</a>
      <a href="">Roadmap</a>
    </div>

    <div className="flex-c">
      <div className="social">
        <i className="icon-facebook" />
        <i className="icon-twitter" />
        <i className="icon-instagram" />
      </div>
    </div>

    <style jsx>{`
      .footer-container {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 20px;
        background-color: #282c37;
        color: white;
        padding: 50px;
        padding-left: 80px;
      }
      a {
        display: block;
        text-decoration: none;
        color: white;
        padding-bottom: 10px;
      }
      a:hover {
        text-decoration: underline;
      }
      .home-link {
        font-size: 22px;
        font-weight: bold;
      }
      .social i {
        font-size: 32px;
        background: #fff;
        margin-right: 13px;
        border-radius: 30px;
        padding: 7px 3px;
        color: #292c37;
      }
      @media (max-width: 991px) {
        .footer-container {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          padding-left: 24px;
          grid-gap: 20px;
        }
      }
    `}</style>
  </div>
)

export default Footer
