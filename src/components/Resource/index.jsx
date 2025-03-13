import { Link } from 'react-router-dom';
import './resource.css';

export function Resource({ resource }) {

  return (
    <div>
        <Link  to={`/resources/${resource.name}`}>
            <h4>{resource.longName}</h4>
        </Link>
    </div>
  )
}
