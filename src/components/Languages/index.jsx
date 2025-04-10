import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { languages } from "../../utils/languages.js";
import { LanguageCard } from "../LanguageCard";
import './languages.css';

export function Languages() {

  return (
    <>
      <div id="languagesHome" className="languages__container">
        <div className="languages__title">
          <h2>Learn, <strong>Speak</strong>, Connect</h2>
          <p>Explore our available languages and see what’s coming next!</p>
        </div>

        <div className='languages__cards-container'>
          <LanguageCard language={languages.spanish} />
          <LanguageCard language={languages.portuguese} />
          <LanguageCard language={languages.filipino} />
          <LanguageCard language={languages.french} />

        </div>

        <div className="languages__more action_hover">
          <Link to="/resources">
            <h6>More resources <i className="fa-solid fa-arrow-right"></i></h6>
          </Link>
        </div>
      </div>

    </>

  )
}
