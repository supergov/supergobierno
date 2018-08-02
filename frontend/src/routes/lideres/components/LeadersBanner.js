import Slider from 'react-slick'
import PropTypes from 'prop-types'
import LeaderCard from './LeaderCard'

// function Next(props) {
//   const { className, style, onClick } = props
//   return (
//     <div onClick={props.onClick} className="slick-next">
//       <i className="icon-right" />
//     </div>
//   )
// }

// function Prev(props) {
//   const { className, style, onClick } = props
//   return (
//     <div onClick={props.onClick} className="slick-prev">
//       <i className="icon-left" />
//     </div>
//   )
// }

const leaders = [
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 46,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 47,
    case: 'Cerrado',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 48,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 46,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 47,
    case: 'Cerrado',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 48,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 46,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 47,
    case: 'Cerrado',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 48,
    case: 'Abierto',
    pictureUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const LeadersBanner = props => (
  <div className="leaders-banner">
    <div className="container-wrapper">
      <p className="banner-title">{props.title}</p>
      <div className="leaders-cards">
        <Slider {...settings}>
          {leaders.map(leader => (
            <LeaderCard key={leader.age} leader={leader} />
          ))}
        </Slider>
      </div>
    </div>
    <style jsx>
      {`
        .leaders-banner {
          background-color: #fff;
          color: #484848;
          padding-bottom: 21px;
          margin-bottom: 17px;
          padding-top: 1px;
        }
      `}
    </style>
  </div>
)

LeadersBanner.propTypes = {
  title: PropTypes.string.isRequired
}

export default LeadersBanner
