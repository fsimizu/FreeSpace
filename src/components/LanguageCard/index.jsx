// import React from "react";
// import { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';

import './languageCard.css';

export function LanguageCard({ language }) {
    // const [isDragging, setIsDragging] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="language__card-container">
            <div
                // style={{ backgroundColor: language.color }}
                className="card language__card"
            >
                <div className="card-inner">
                    <div className="card-front"
                        style={{
                            backgroundImage: `url(${language.imgUrl})`,
                            borderImage: `linear-gradient(to right, ${language.colorFrom} 50%, ${language.colorTo} 0%)`,
                            borderImageSlice: 1,
                            borderWidth: '10px',
                            borderStyle: 'solid',
                        }}
                        onClick={() => {
                            navigate(`/resources/${language.name}`) ;
                            // window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <div className="card-body">
                            {/* <div>FLAG ICON</div> */}
                            <h4>{language.name}</h4>
                        </div>
                    </div>
                    <div className="card-back"
                                            style={{
                                                backgroundColor: language.color,
                                            }}
                    >
                        <div className="card-body">
                            <p>{language.goText}</p>

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