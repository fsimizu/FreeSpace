import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import './aboutUsCard.css';

export function AboutUsCard({ card, isExpanded, onToggle }) {

    return (
        <div className="aboutUsCard__container">
            <div className="aboutUsCard__title-container"
                onClick={() => {
                    if (!isExpanded) {
                        onToggle();
                    }
                }}
            >
                <h6 className="aboutUsCard__title"
                style={{backgroundColor: `${card.color}`}}
                >{card.icon} {card.name}</h6>
                <div className="aboutUsCard__arrow">
                    {isExpanded ? <ChevronDown size={16} className="rotated"/> : <ChevronDown size={16} />}
                </div>
            </div>
            
            <div className={`aboutUsCard__content ${isExpanded ? 'aboutUsCard__content-expanded' : 'aboutUsCard__content-collapsed'}`}>
                
                    <div>
                        {card.description}

                        <div className="action_hover">
                            <Link to={`/resources/${card.shortName}`}>
                                <h6>Go to videos <i className="fa-solid fa-arrow-right"></i></h6>
                            </Link>
                        </div>

                    </div>         
            </div>
        </div>
    )
}
