import React from 'react'
// import { Parallax, ParallaxLayer } from 'react-spring'
import Slider from 'react-slick'
import RoyaltyCard from './RoyaltyCard'

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

const royalties = [
  {
    name: 'Cerro matoso',
    city: 'Sincelejo',
    percentage: '15',
    value: '350.000.000',
    year: '2017',
    imageUrl:
      'https://www.unipymes.com/wp-content/uploads/2015/03/2.-regalias-350x185.jpg'
  },
  {
    name: 'Cerro matoso 2',
    city: 'Sincelejo',
    percentage: '15',
    value: '350.000.000',
    year: '2017',
    imageUrl:
      'https://www.unipymes.com/wp-content/uploads/2015/03/2.-regalias-350x185.jpg'
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
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

class RoyaltiesBanner extends React.Component {
  // handleClick = to => {
  //   this.parallax.scrollTo(to)
  // }
  // renderCards() {
  //   return (
  //     <div>
  //       {royalities.map(royalty => (
  //         <div key={royalty.name}>
  //           <royaltyCard key={royalty.name} royalty={royalty} />
  //         </div>
  //       ))}
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="container-wrapper royalties-banner">
        <p className="banner-title">Regalías</p>

        <Slider {...settings}>
          {royalties.map(royalty => (
            <div key={royalty.name}>
              <RoyaltyCard key={royalty.name} royalty={royalty} />
            </div>
          ))}
          {royalties.map(royalty => (
            <div key={royalty.name}>
              <RoyaltyCard key={royalty.name} royalty={royalty} />
            </div>
          ))}
          {royalties.map(royalty => (
            <div key={royalty.name}>
              <RoyaltyCard key={royalty.name} royalty={royalty} />
            </div>
          ))}
        </Slider>

        <style jsx>
          {`
            .royalties-banner {
              padding-bottom: 30px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default RoyaltiesBanner
