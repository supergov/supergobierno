import React from 'react'
import OfficialCard from './OfficialCard'

const officials = [
  {
    name: 'Álvaro Uribe',
    position: 'Senador',
    picture: {
      url:
        'http://www.elcolombiano.com/documents/10157/0/580x387/0c11/580d365/none/11101/MVLJ/image_content_30492060_20180217151817.jpg',
      width: '216px',
      height: '160px'
    }
  },
  {
    name: 'Jorge Robledo',
    position: 'Senador',
    picture: {
      url:
        'https://static.iris.net.co/semana/upload/images/2012/8/14/310258_201341_1.jpg',
      width: '216px',
      height: '160px'
    }
  },
  {
    name: 'Claudia López',
    position: 'Senadora',
    picture: {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Claudialopezsenadora.png/260px-Claudialopezsenadora.png',
      width: '216px',
      height: '160px'
    }
  },
  {
    name: 'Iván Cepeda',
    position: 'Senador',
    picture: {
      url:
        'https://static.iris.net.co/semana/upload/images/2018/3/28/561864_1.jpg',
      width: '216px',
      height: '160px'
    }
  }
]

const OfficialsBanner = () => (
  <div className="officials-banner">
    <div className="container-wrapper">
      <p className="banner-title">Funcionarios</p>
      <div className="officials-cards">
        {officials.map(official => (
          <OfficialCard key={`${official.name}-card`} official={official} />
        ))}
      </div>
    </div>
    <style jsx>
      {`
        .officials-banner {
          background-color: #e8e8e8;
          color: #484848;
          padding: 33px 0 55px 0;
          text-align: left;
        }
        .banner-title {
          margin: 20px 13%;
          font-weight: bolder;
        }
        .officials-cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          align-items: center;
          justify-items: center;
        }
      `}
    </style>
  </div>
)

export default OfficialsBanner
