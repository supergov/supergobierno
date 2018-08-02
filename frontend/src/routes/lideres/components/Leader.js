import Link from 'next/link'
import LeadersBanner from './LeadersBanner'

const leader = {
  name: 'Temístocles Machado',
  age: 46,
  case: 'Abierto',
  images: [
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-2.jpg',
    'https://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg',
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-12.jpg',
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-4.jpg',
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-11.jpg',
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-5.jpg',
    'https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-9.jpg'
  ],
  smallDescription:
    'Clan del Golfo, dos asesinos en moto, de nombres Claudio y Luis alias "el máquina", son señalados por la comunidad.',
  date: {
    day: 27,
    month: 'Enero',
    year: 2018
  },
  city: 'Buenaventura',
  department: 'Valle del Cauca',
  description:
    'Pese a que era cauteloso por tantos años de lucha entre amenazas, Temístocles Machado tenía la claridad y la valentía que lo hacía líder en Buenaventura. Para los allegados y líderes del paro cívico realizado en esa ciudad el año pasado, el asesinato de Temis, como le decían, representa un mensaje a quienes luchan por derechos del territorio y comunidades. El líder fue asesinado por dos pistoleros que llegaron en la tarde del sábado y le dispararon en un parqueadero del barrio Isla de la Paz, a un lado de la vía alterna interna, en cuyo alrededores hay tierras en pugna por las comunidades. Ese barrio era parte de luchadores como Machado, para que no les llegara la violencia de grupos armados. Era una tarea heredada de su padre, José Evangelista, también líder comunitario. En 2006 habían asesinado a Albeiro Osorio y Wílber Rodríguez, dos compañeros de lucha. Y a él le asignaron escolta por un tiempo. Por temor, la mamá le pedía que se cuidara. En su discurso, Machado ponía de presente que la tierra donde se construyó uno de los puertos era de los ancestros. Recordaba cómo desaparecieron canchas en arena y cómo les habían tapado el acceso al mar en el estero El Aguacatico, para nadar y pescar. También sostenía que con la construcción de un puerto privado se tapó un cementerio clandestino de los paramilitares del bloque Calima. Así quedó en el informe del Centro Nacional de Memoria Histórica. Cuando se supo de su muerte en una clínica, afuera la gente empezó a gritar: “El pueblo no se rinde, carajo”, un coro que más de una vez él entonó. A Machado, padre de 11 hijos, lo rodearon presiones. En el 2013, como candidato al Concejo le pintaron sus vallas con pintura roja.',
  contributions: [
    `"El pueblo no se rinde, carajo"`,
    `"El pueblo no se rinde, carajo"`,
    `"El pueblo no se rinde, carajo"`,
    `"El pueblo no se rinde, carajo"`,
    `"El pueblo no se rinde, carajo"`
  ],
  references: [
    'Test de anexo con un link de referencia al anexo.',
    'Test de anexo con un link de referencia al anexo.',
    'Test de anexo con un link de referencia al anexo.'
  ]
}

const Leader = () => (
  <div className="leader-wrapper">
    <Link href="/lideres">
      {/* icon */}
      <a id="go-back">Volver</a>
    </Link>
    <h1 className="leader-name"> {leader.name} </h1>
    <div className="container-wrapper">
      <div className="leader-info">
        <div className="leader-info-head">
          <div className="leader-images-banner">
            <img src="https://pacifista.co/wp-content/uploads/2017/11/Tem%C3%ADstocles-2.jpg" />
            <p>{`${leader.age} años`}</p>
          </div>
          <div className="leader-basic-info">
            <div className="leader-basic-info-main">
              <h1>{`Caso ${leader.case}`}</h1>
              <h2>Posibles autores:</h2>
              <p>{`${leader.smallDescription}`}</p>
              <h2>Fecha de asesinato</h2>
              <p>{`${leader.date.month} ${leader.date.day} de ${
                leader.date.year
              }`}</p>
              <h2>Lugar</h2>
              <p>{`${leader.city}, ${leader.department}`}</p>
            </div>
            <div className="leader-update">
              <h1>¿Tienes más información?</h1>
              <p>
                Van <span className="bold-text">{234}</span> días de impunidad,
                comparte anónimamente y ayuda a cerrar este caso.
              </p>
              <Link href="">
                <input type="button" value="Actualizar caso" />
              </Link>
            </div>
          </div>
        </div>
        <div className="leader-info-body">
          <h1>¿Quién fue este héroe?</h1>
          <div className="leader-info-text">
            {/* <p>{leader.description}</p> */}
            <p>
              Pese a que era cauteloso por tantos años de lucha entre amenazas,<sup
              >
                {1}
              </sup>Temístocles Machado tenía la claridad y la valentía que
              hacía líder en Buenaventura.<br /> Para los allegados y líderes
              del paro cívico realizado en esa ciudad el año pasado, el
              asesinato de Temis, como le decían, representa un mensaje a
              quienes luchan por derechos del territorio y comunidades.
            </p>
            <p>
              El líder fue asesinado por dos pistoleros que llegaron en la tarde
              del sábado y le dispararon en un parqueadero del barrio Isla de la
              Paz, a un lado de la vía alterna interna, en cuyo alrededores hay
              tierras en pugna por las comunidades.<sup>{2}</sup>
            </p>
            <p>
              Ese barrio era parte de luchadores como Machado, para que no les
              llegara la violencia de grupos armados. Era una tarea heredada de
              su padre, José Evangelista, también líder comunitario.<sup>
                {3}
              </sup>{' '}
              En 2006 habían asesinado a Albeiro Osorio y Wílber Rodríguez, dos
              compañeros de lucha. Y a él le asignaron escolta por un tiempo.
              Por temor, la mamá le pedía que se cuidara.
            </p>
            <p>
              En su discurso, Machado ponía de presente que la tierra donde se
              construyó uno de los puertos era de los ancestros. Recordaba cómo
              desaparecieron canchas en arena y cómo les habían tapado el acceso
              al mar en el estero El Aguacatico, para nadar y pescar.
            </p>
            <p>
              También sostenía que con la construcción de un puerto privado se
              tapó un cementerio clandestino de los paramilitares del bloque
              Calima. Así quedó en el informe del Centro Nacional de Memoria
              Histórica.
            </p>
            <p>
              Cuando se supo de su muerte en una clínica, afuera la gente empezó
              a gritar: “El pueblo no se rinde, carajo”, un coro que más de una
              vez él entonó.
            </p>
            <p>
              A Machado, padre de 11 hijos, lo rodearon presiones. En el 2013,
              como candidato al Concejo le pintaron sus vallas con pintura roja.
            </p>
          </div>
          <div className="leader-info-contributions">
            <h1>Contribuciones</h1>
            <div className="leader-contributions-list">
              <ul>
                {leader.contributions.map(contribution => (
                  <li key={contribution[0]}>{`<i /> ${contribution}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="leader-info-references">
          <h1>Anexos</h1>
          <ul>
            {leader.references.map((reference, index) => (
              <li key={reference[0]}>{`${index + 1}. ${reference}`}</li>
            ))}
          </ul>
        </div>
        <p className="last-update">Última actualización: Hace 15 días</p>
      </div>
    </div>
    <div className="other-leaders-banner">
      <LeadersBanner title="Otros casos" />
    </div>
    <div className="report-leader">
      <h1>
        Aún nos faltan <span className="bold-text">{150}</span> casos por
        informar
      </h1>
      <Link href="">
        <input type="button" value="Reportar caso" />
      </Link>
    </div>
    <style jsx>
      {`
        .slick-slider {
          width: 50%;
        }
        .leader-wrapper {
          text-align: center;
        }
        .leader-wrapper a {
          color: inherit;
        }
        #go-back {
          font-size: 20px;
          position: absolute;
          left: 30px;
        }
        .leader-name {
          font-size: 22px;
          font-weight: bold;
          margin-top: 30px;
        }
        .leader-images-banner {
          background-color: #fff;
          position: relative;
          margin: 20px;
          // box-shadow: 0px 2px 6px 0px rgba(72, 72, 72, 0.3);
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .leader-images-banner img {
          padding: 0;
          width: 100%;
          height: 100%;
          display: block;
          background-position: center top;
          background-size: cover;
          object-fit: cover;
          object-position: 50% 0;
        }
        .leader-images-banner p {
          background-color: #fff;
          font-size: 18px;
          font-weight: bold;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 2% 5%;
        }
        .leader-info-head {
          display: grid;
          grid-template-columns: 3fr 2fr;
        }
        .leader-basic-info {
          display: grid;
          grid-template-rows: 3fr 2fr;
        }
        .leader-basic-info-main {
          background-color: #fff;
          text-align: left;
          padding: 20px;
          margin: 20px 20px 10px 20px;
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .leader-basic-info-main h1 {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
        .leader-basic-info-main h2 {
          padding-top: 14px;
          font-weight: bold;
        }
        .leader-update {
          background-color: #fff;
          padding: 20px;
          margin: 10px 20px 20px 20px;
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .leader-update h1 {
          margin: 0;
          font-size: 18px;
          font-weight: bold;
          text-align: left;
        }
        .leader-update p {
          text-align: left;
          padding: 10px 0;
        }
        .bold-text {
          font-weight: bold;
        }
        .leader-update input {
          background-color: #fff;
          font-size: inherit;
          font-weight: bold;
          margin-top: 8px;
          padding: 8px 20px;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          box-shadow: 0px 1px 2px 0px rgba(72, 72, 72, 0.5);
        }
        .leader-info-body {
          background-color: #fff;
          text-align: justify;
          margin: 20px;
          padding: 20px 0;
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .leader-info-body h1 {
          margin: 25px 50px 18px;
          font-size: 18px;
          font-weight: bold;
        }
        .leader-info-text {
          margin: 0 50px;
        }
        .leader-info-text p {
          padding: 10px 0;
        }
        .leader-info-text sup {
          vertical-align: super;
          font-size: smaller;
        }
        .leader-contributions-list {
          margin: 0 50px;
        }
        .leader-contributions-list ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
        }
        .leader-info-references {
          background-color: #fff;
          text-align: left;
          margin: 20px;
          padding: 20px 0;
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .leader-info-references h1 {
          margin: 10px 50px;
          font-size: 18px;
          font-weight: bold;
        }
        .leader-info-references ul {
          margin-left: 50px;
        }
        .leader-info-references li {
          padding: 8px 0;
        }
        .last-update {
          font-style: italic;
          font-size: 14px;
          margin-right: 20px;
          text-align: right;
        }
        .report-leader {
          display: inline-flex;
          margin: 40px 0;
          font-size: 22px;
        }
        .report-leader h1 {
          align-self: center;
        }
        .report-leader input {
          background-color: #fff;
          font-size: 22px;
          font-weight: bold;
          margin: 0 80px;
          padding: 14px 30px;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          box-shadow: 0px 2px 6px -1px rgba(72, 72, 72, 0.3);
        }
        .other-leaders-banner {
          text-align: left;
          margin-top: 30px;
        }
      `}
    </style>
  </div>
)

export default Leader
