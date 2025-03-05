import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './languages.css';
import Slider from "react-slick";

export function Languages() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="languages__container">
      <div className="languages__title">
        <h2>Learn, Speak, Connect</h2>
        <p>Explore our available languages and see what’s coming next!</p>
      </div>


      <Slider {...settings}>
        <div>
          
          
          <div className="card">
              <div className="card-body">
                <h3>Spanish</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
        <div>
        <div className="card">
              <div className="card-body">
                <h3>Portuguese</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div>
        <div className="card">
              <div className="card-body">
                <h3>French</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div>
        <div className="card">
              <div className="card-body">
                <h3>Filipino</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div>
        <div className="card">
              <div className="card-body">
                <h3>Japanese</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div>
        <div className="card">
              <div className="card-body">
              <h3>Italian</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
      </Slider>


    </div>
  )
}
