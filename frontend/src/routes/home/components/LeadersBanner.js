import LeaderCard from './LeaderCard'

const leaders = [
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 46,
    case: 'Abierto',
    picUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 47,
    case: 'Cerrado',
    picUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 48,
    case: 'Abierto',
    picUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  }
]
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
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
const LeadersBanner = () => (
  <div className="leaders-banner">
    <div className="container-wrapper">
      <p className="banner-title">Líderes Asesinados</p>
      <div className="leaders-cards">
        {leaders.map(leader => <LeaderCard key={leader.age} leader={leader} />)}
      </div>
    </div>
    <style jsx>
      {`
        .leaders-banner {
          background-color: #fff;
          color: #484848;
        }
        .banner-title {
          margin: 0;
          padding: 30px 20px 22px 13%;
          font-weight: bolder;
          text-align: left;
        }
        .leaders-cards {
          margin-bottom: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          justify-items: center;
        }
      `}
    </style>
  </div>
)

export default LeadersBanner
