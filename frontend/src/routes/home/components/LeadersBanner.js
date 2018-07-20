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
    age: 46,
    case: 'Cerrado',
    picUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  },
  {
    name: 'Temístocles Machado',
    city: 'Buenaventura',
    age: 46,
    case: 'Abierto',
    picUrl:
      'http://pacifista.co/wp-content/uploads/2018/01/Tem%C3%ADstocles-1.jpg'
  }
]

const LeadersBanner = () => (
  <div className="leaders-banner">
    <div className="container-wrapper">
      <p className="banner-title">Líderes Asesinados</p>
      <div className="leaders-cards">
        {leaders.map(leader => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
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
