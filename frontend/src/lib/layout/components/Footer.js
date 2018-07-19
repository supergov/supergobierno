const Footer = () => (
  <div className="footer-container">
    <div>
      <a href="" className="home-link">SuperGobierno.com</a>
      <a href="" >Algunos derechos reservados</a>
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

    <style jsx>{`
      .footer-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 20px;
        background-color: #282c37;
        color: white;
        padding: 50px;
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
    `}</style>
  </div>
)

export default Footer
