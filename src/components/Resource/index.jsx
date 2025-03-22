import { Link } from 'react-router-dom';
import './resource.css';

export function Resource({ resource }) {

  return (
    <div className='resource__container'>
      <Link to={`/resources/${resource.name}`} className="resource_button">
        <img src={`${resource.imgUrl}`} className="resource-img" alt=""></img>
        <div className="resource_text">
          <h6 className="card-title">{resource.longName}</h6>
          <p className="card-text">{resource.description}</p>
        </div>


        {/* <Link to={`/resources/${resource.name}`} className="btn btn-primary resource_button">
        Go to videos
      </Link> */}

        {/* </div> */}
      </Link>
    </div>
  )
}
