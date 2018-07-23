import React from 'react'
import Slider from 'react-slick'
import OfficialCard from './OfficialCard'

function Next(props) {
  const { className, style, onClick } = props
  return (
    <div onClick={props.onClick} className="slick-next">
      <i className="icon-right" />
    </div>
  )
}

function Prev(props) {
  const { className, style, onClick } = props
  return (
    <div onClick={props.onClick} className="slick-prev">
      <i className="icon-left" />
    </div>
  )
}

const officials = [
  {
    name: 'Álvaro Uribe',
    position: 'Senador',
    picture: {
      url:
        'http://www.elcolombiano.com/documents/10157/0/580x387/0c11/580d365/none/11101/MVLJ/image_content_30492060_20180217151817.jpg'
    }
  },
  {
    name: 'Jorge Robledo',
    position: 'Senador',
    picture: {
      url:
        'https://static.iris.net.co/semana/upload/images/2012/8/14/310258_201341_1.jpg'
    }
  },
  {
    name: 'Claudia López',
    position: 'Senadora',
    picture: {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Claudialopezsenadora.png/260px-Claudialopezsenadora.png'
    }
  },
  {
    name: 'Iván Cepeda',
    position: 'Senador',
    picture: {
      url:
        'https://static.iris.net.co/semana/upload/images/2018/3/28/561864_1.jpg'
    }
  }
]
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}
const OfficialsBanner = () => (
  <div className="officials-banner">
    <div className="container-wrapper">
      <p className="banner-title">Funcionarios</p>

      <Slider {...settings}>
        {officials.map(official => (
          <OfficialCard key={`${official.name}-card`} official={official} />
        ))}
        {officials.map(official => (
          <OfficialCard key={`${official.name}-card`} official={official} />
        ))}
        {officials.map(official => (
          <OfficialCard key={`${official.name}-card`} official={official} />
        ))}
      </Slider>
    </div>
    <style jsx>
      {`
        .officials-banner {
          background-color: #e8e8e8;
          color: #484848;
          padding: 10px 0 30px 0;
          text-align: left;
        }
      `}
    </style>
  </div>
)

export default OfficialsBanner
