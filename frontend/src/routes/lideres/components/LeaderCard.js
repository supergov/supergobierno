import PropTypes from 'prop-types'
import Link from 'next/link'

const LeaderCard = ({ leader }) => (
  <div className="leader-card-wrapper">
    <Link href="/lideres/lider">
      <div className="leader-card-head">
        <img src={leader.pictureUrl} alt={leader.name} />
        <p
          className="case-state"
          style={
            leader.case === 'Cerrado'
              ? { backgroundColor: '#282c37', color: '#fff' }
              : {}
          }
        >
          {leader.case}
        </p>
      </div>
    </Link>
    <div className="leader-card-body">
      <Link href={`/lideres/${leader.name}`}>
        <p className="leader-name">{leader.name}</p>
      </Link>
      <p>{leader.city}</p>
      <p className="leader-age">{`${leader.age} años`}</p>
    </div>
    <style jsx>
      {`
        .leader-card-wrapper {
          background-color: #ededed;
          color: #282c37;
          border-radius: 4px;
          height: 330px;
          margin: 0px 20px;
          text-align: center;
          box-shadow: 0px 0px 8px 0px rgba(72, 72, 72, 0.4);
        }
        p {
          margin: 0;
        }
        .leader-card-head {
          position: relative;
          cursor: pointer;
        }
        .leader-card-head .case-state {
          position: absolute;
          top: 0;
          right: 0;
          margin: 0;
          padding: 7px 16px;
          border-radius: 0 4px 0 4px;
          background-color: #ededed;
        }
        img {
          width: 100%;
          height: 214px;
          border-radius: 4px 4px 0 0;
          background-position: center top;
          background-size: cover;
          object-fit: cover;
          object-position: 50% 0;
        }
        .leader-card-body {
          position: relative;
        }
        .leader-card-body .leader-age {
          font-size: 14px;
          position: absolute;
          right: 14px;
          padding-top: 7px;
        }
        .leader-name {
          font-size: 20px;
          font-weight: bold;
          padding: 29px 0 10px 0;
          cursor: pointer;
        }
      `}
    </style>
  </div>
)

LeaderCard.propTypes = {
  leader: PropTypes.object.isRequired
}

export default LeaderCard
