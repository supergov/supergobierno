import { Query } from 'react-apollo'
import AllFilms from '../graphql/AllFilms.graphql'

const Home = () => (
  <div>
    <h1>Hello world!</h1>
    <Query query={AllFilms}>
      {({ loading, data, error }) => {
        if (loading) return <h2>Loading...</h2>
        if (error) return <h2>An error occurred</h2>

        return (
          <div>
            <p>Here is the data displayed as a JSON:</p>
            <p>{JSON.stringify(data)}</p>
          </div>
        )
      }}
    </Query>
  </div>
)

export default Home
