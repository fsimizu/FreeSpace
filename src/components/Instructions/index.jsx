import { ChevronDown } from "lucide-react";
import { useState } from "react";
import './instructions.css';

export function Instructions() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="instructions__container">
            <div className="max-width">
                <div onClick={() => setIsExpanded(!isExpanded)}>
                    <h5 className="instructions__title">
                        Instructions {isExpanded ? <ChevronDown size={20} className="rotated"/> : <ChevronDown size={20} />}
                    </h5>
                </div>
                <div
                    className={`instructions__content ${isExpanded ? 'instructions__content--expanded' : 'instructions__content--collapsed'
                        }`}
                >
                    <ol>
                        <li>Play the dialogues and try to interpret along as accurately as possible.</li>
                        <li>Note vocabulary you find challenging and review to expand your linguistic range.</li>
                        <li>Compare your answers to assess areas where you can improve.</li>
                    </ol>
                </div>

            </div>
        </div>
    );
}