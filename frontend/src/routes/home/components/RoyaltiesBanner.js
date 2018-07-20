import React from 'react'
// import { Parallax, ParallaxLayer } from 'react-spring'
import RoyaltyCard from './RoyaltyCard'

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
      <div className="royalties-banner">
        <div className="container-wrapper">
          <p className="banner-title">Regalías</p>
          <div className="cards-wrapper">
            {royalties.map(royalty => (
              <div key={royalty.name}>
                <RoyaltyCard key={royalty.name} royalty={royalty} />
              </div>
            ))}
          </div>
        </div>
        <style jsx>
          {`
            .royalties-banner {
              background-color: #f6f6f6;
              color: #484848;
              min-height: 340px;
            }
            .banner-title {
              margin: 0;
              padding: 30px 20px 22px 13%;
              font-weight: bolder;
              text-align: left;
            }
            .cards-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              justify-items: center;
            }
          `}
        </style>
      </div>
    )
  }
}

export default RoyaltiesBanner
