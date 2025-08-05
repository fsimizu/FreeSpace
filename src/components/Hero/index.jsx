import React, { useEffect }  from "react";
import { Link } from 'react-router-dom';
import './hero.css';
import { getVideos } from "../../utils/functions";

export function Hero() {



// Usage in component
useEffect(() => {
  async function loadVideos() {
    try {
      const data = await getVideos("spanish");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  loadVideos();
}, []);




  return (
    <div id="heroHome" className="hero__container">
      <div className="hero__body max-width">

        <div className="hero__content">
          <div className="hero__text_container">
            <h1>Your <strong>NAATI CCL</strong> success starts today!</h1>
            <div>Don't wait. Access our free mock tests and expert strategies to pass your exam with confidence.</div>
          </div>
          <Link to={`/resources`} className="hero__action_button button_primary">
            <button className="btn btn-primary"><div>Start Now</div></button>
          </Link>
        </div>

      </div>
    
    </div>
  )
}
