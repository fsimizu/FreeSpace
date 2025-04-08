import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './languages.css';
import Slider from "react-slick";
import { LanguageCard } from "../LanguageCard";
import { Link } from 'react-router-dom';
import { languages } from "../../utils/languages.js"

export function Languages() {

  return (
    <div>

        <div className="languages__border">
          <svg width="100%" height="100px" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C300,0 900,100 1200,50 L1200,100 L0,100 Z" fill="#F2D388"></path>
          </svg>
        </div>



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

      <div className="languages__border">
        <svg width="100%" height="100px" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C300,0 900,100 1200,50 L1200,100 L0,100 Z" fill="#F2D388" transform="rotate(180, 600, 50)"></path>
      </svg>
        </div>

    </div>

  )
}
