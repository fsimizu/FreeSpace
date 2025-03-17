import React from "react";
import './hero.css';
import { Link } from 'react-router-dom';

export function Hero() {

  return (
    <div id="heroHome" className="hero__container">
      {/* <div className="hero__background">HOLAA</div> */}
      <div className="hero__content">
        <div className="hero__text_container">
          <h1>Your <strong>NAATI CCL</strong> success starts today!</h1>
          <div>Don't wait. Access our free mock tests and expert strategies to pass your exam with confidence.</div>
        </div>

        {/* <div className="hero__image_container">
          <img src="/images/woman_hero.png" alt="" />
        </div> */}

        <Link to={`/resources`} className="hero__action_button button_primary">
          <button className="btn btn-primary"><h6>Start practicing</h6></button>
        </Link>
        <Link to={`/resources`} className="hero__action_button button_secondary">
          <button className="btn btn-primary"><h6>Choose your language</h6></button>
        </Link>
      </div>

    </div>
  )
}
