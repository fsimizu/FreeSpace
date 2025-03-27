import { Link } from 'react-router-dom';
import './resource.css';

export function Resource({ resource }) {

  return (
    <div className='resource__container'>
      <Link to={`/resources/${resource.name}`} className="resource_button">
        <img src={`${resource.imgUrl}`} className="resource-img" alt=""></img>
        <div className="resource_text">
          <h6 className="card-title"><span className='resource__icon'>{resource.icon}</span> {resource.longName}</h6>
          <p className="card-text">{resource.description}</p>
        </div>
      </Link>
    </div>
  )
}
