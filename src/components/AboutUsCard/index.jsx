import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import './aboutUsCard.css';

export function AboutUsCard({ card, isExpanded, onToggle }) {

    // const [aboutIsExpanded, setAboutIsExpanded] = useState(card.initial);

    return (
        <div className="aboutUsCard__container">
            <div className="aboutUsCard__title-container" 
            onClick={() => {
                if (!isExpanded) {
                  onToggle(); 
                }
              }}
            >
                <h6 className="aboutUsCard__title">{card.name}</h6>
                <div>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </div>
            {isExpanded && <p>{card.description}</p>}
        </div>
    )
}
