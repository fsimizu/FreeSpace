// import React from "react";
// import { useState } from "react";
import { Link } from 'react-router-dom';
import './languageCard.css';

export function LanguageCard({ language }) {
    // const [isDragging, setIsDragging] = useState(false);

    return (
        <div
            style={{ backgroundColor: language.color, userSelect: "none" }}
            className="card"
            // onMouseDown={() => setIsDragging(false)} // Reset dragging state on click
            
            // onMouseMove={() => setIsDragging(true)} // Detect dragging
            // onMouseUp={(e) => {
            //     if (isDragging) {
            //         e.preventDefault(); // Prevent link navigation when dragging
            //     }
            // }}
        >
            <Link
                to={`/resources/${language.short}`}
                onMouseUp={(e) => e.preventDefault()}
                draggable="false" // Prevents the <a> from being dragged
            >
                <div className="card-body">
                    <div>FLAG ICON</div>
                    <h4>{language.name}</h4>

                </div>
            </Link>

        </div>
    )
}