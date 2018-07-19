import { Query } from 'react-apollo'
import AllFilms from '../graphql/AllFilms.graphql'
import OfficialsBanner from './OfficialsBanner'
import RoyaltysBanner from './RoyaltiesBanner'
import LeadersBanner from './LeadersBanner'

const Home = () => (
  <div className="home-container">
    <OfficialsBanner />
    <RoyaltysBanner />
    <LeadersBanner />
    <div className="query-example-container">
      <p>Apollo Query Example: </p>
      <Query query={AllFilms}>
        {({ loading, data, error }) => {
          if (loading) return <h2>Loading...</h2>
          if (error) return <h2>An error occurred ({error.message})</h2>
          return (
            <div>
              <p>Here is the data displayed as a JSON:</p>
              <p>{JSON.stringify(data)}</p>
            </div>
          )
        }}
      </Query>
    </div>
    <style jsx>
      {`
        .home-container {
          background-color: #fff;
          text-align: center;
        }
        .query-example-container {
          background-color: #f6f6f6;
        }
      `}
    </style>
  </div>
)

export default Home
