import { Link } from 'react-router-dom';
import './notFound.css';

export function NotFoundContainer() {

    return (
        <div className='notFound__container d-flex justify-content-center align-items-end'>
            <img src="/images/404.png" alt="not_found" className='notFound__image'/>
            <div className='notFount__content d-flex flex-column justify-content-center align-items-center'>
                <div className='notFount__404'>
                    404
                </div>
                <div className='notFount__text'>
                    <p>Oh no! You failed this time.</p>
                    <p>The page you are looking for does not exist. Yet.</p>
                </div>

                <Link to={'/'} className="btn btn-primary notFount__button">
                    Back home
                </Link>

            </div>
        </div>
    )
}
