import {Link} from 'react-router-dom'

const PeopleCard = ({id, title, imgLink, name}) => {
    return(
      <Link to={`/people/${id}`} className='card'>
       <div className="card__img">
        <img src={imgLink} alt="
        just img" />
       </div>
             <div className="card__content">
        <h2>{title}</h2>
        <span className="relase-date">{}</span>
        <span className="rating">{}</span>
      </div>
      </Link>
    )
}


export default PeopleCard