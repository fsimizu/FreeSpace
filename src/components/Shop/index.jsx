import './shop.css';
import { Link } from 'react-router-dom';

export function Shop({ buttons }) {

    return (
        <div className='shop__container'>
            <div className='max-width'>

                <h5>Check our exclusive content and support our channel</h5>


                <div className='shopProd__flex'>

                    {Object.values(buttons.shop).map((prod) => (
                            <Link to={prod.kofi_prod_url} className="shopProd__container">

                                <img src={prod.image_path} alt={prod.title} className="shopProd__image" />

                                <div className="shopProd__text">
                                    <h6 className="shopProd__ellipsis">{prod.title}</h6>
                                    <p className="shopProd__ellipsis shopProd__desc">{prod.description}</p>
                                </div>
                            </Link>
                    ))}

                </div>



                <div className="shop__visit action_hover">
                    <Link to="https://ko-fi.com/fs_learn/shop">
                        <h6>Visit our shop <i className="fa-solid fa-arrow-right"></i></h6>
                    </Link>
                </div>

            </div>
        </div>
    )
}
