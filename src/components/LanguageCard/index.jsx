// import React from "react";
// import { useState } from "react";
import { Link } from 'react-router-dom';
import './languageCard.css';

export function LanguageCard({ language }) {
    // const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="language__card-container">
            <div
                style={{ backgroundColor: language.color }}
                className="card language__card"
            >
                <div className="card-inner">
                    <div className="card-front">
                        <div className="card-body">
                            <div>FLAG ICON</div>
                            <h4>{language.name}</h4>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-body">
                            <p>More details about {language.name}</p>

                            <Link to={`/resources/${language.name}`} className="btn btn-primary">
                                {language.go}
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}