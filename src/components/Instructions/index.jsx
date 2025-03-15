import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import './instructions.css';

export function Instructions() {

    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div className="instructions__container">
            <div
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h5>Instructions {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</h5>

            </div>
            {isExpanded && (
                <p>
                    <ol>
                        <li>Play the dialogues and try to interpret along as accurately as possible.</li>
                        <li>Note vocabulary you find challenging and review to expand your linguistic range.</li>
                        <li>Compare your answers to assess areas where you can improve.</li>
                    </ol>
                </p>
            )}
        </div>
    );
}