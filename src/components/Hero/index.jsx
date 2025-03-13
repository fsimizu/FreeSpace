import React from "react";
import './hero.css';

export function Hero() {

  return (
    <div id="heroHome" className="hero__container">

      <div className="hero__text_container">
        <h1>Your <strong>NAATI CCL</strong> success starts today!</h1>
        <div>Don't wait. Access our free mock tests and expert strategies to pass your exam with confidence.</div>
      </div>

      <div className="hero__image_container">
        <img src="src/assets/images/woman_hero.png" alt="" />
      </div>

      <div className="hero__action_button">
        <button className="btn btn-primary"><h6>Start practicing</h6></button>
      </div>

    </div>
  )
}
