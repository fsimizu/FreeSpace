import { Link } from 'react-router-dom';
import './resource.css';

export function Resource({ resource }) {

  return (
    <div className='resource__container'>
      <img src="/images/woman_hero.png" className="resource-img" alt="..."></img>
      {/* <div className="resource-body"> */}

      <h5 className="card-title">{resource.longName}</h5>
      <p className="card-text">{resource.description}</p>
      <hr />
      <Link to={`/resources/${resource.name}`} className="btn btn-primary">
        Go to videos
      </Link>

      {/* </div> */}

    </div>
  )
}
