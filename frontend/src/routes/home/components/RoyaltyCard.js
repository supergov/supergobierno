import PropTypes from 'prop-types'
import Link from 'next/link'

const RoyaltyCard = ({ royalty }) => (
  <div className="royalty-card-wrapper">
    <div className="royalty-body">
      <Link href={`/regalias/${royalty.name}`}>
        <img src={royalty.imageUrl} alt={royalty.name} />
      </Link>
      <div className="projects-info">
        <p className="percentage-title">Porcentaje entregado</p>
        <p className="projects-percentage">{`${royalty.percentage}%`}</p>
        <p className="projects-value">
          {`$ ${royalty.value} (${royalty.year})`}
        </p>
      </div>
    </div>
    <div className="royalty-footer">
      <Link href={`/regalias/${royalty.name}`}>
        <p className="projects-name">{royalty.name}</p>
      </Link>
      <p className="projects-city">{royalty.city}</p>
    </div>
    <style jsx>
      {`
        .royalty-card-wrapper {
          width: 469px;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 0px 0px 6px 0px rgba(72, 72, 72, 0.2);
        }
        .royalty-body {
          display: grid;
          grid-template-columns: 282px 187px;
        }
        img {
          width: 282px;
          height: 155px;
          border-radius: 4px 0 0 0;
          cursor: pointer;
        }
        .projects-info {
          padding: 25px 17px;
        }
        .projects-info p {
          margin: 7px 0;
        }
        .projects-percentage {
          font-size: 35px;
        }
        .royalty-footer {
          background-color: #474747;
          border-radius: 0 0 4px 4px;
          color: #fff;
          height: 43px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          justify-items: right;
        }
        .royalty-footer p {
          margin: 0;
          padding-right: 10px;
        }
        .royalty-footer .projects-name {
          font-size: 20px;
          align-self: center;
          cursor: pointer;
        }
        .royalty-footer .projects-city {
          align-self: center;
        }
      `}
    </style>
  </div>
)

RoyaltyCard.propTypes = {
  royalty: PropTypes.object.isRequired
}

export default RoyaltyCard
