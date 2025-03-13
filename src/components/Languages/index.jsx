import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './languages.css';
import Slider from "react-slick";
import { LanguageCard } from "../LanguageCard";
import { Link } from 'react-router-dom';

export function Languages() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Enables centering of slides
    centerPadding: "60px", // Removes extra padding for perfect centering
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // Below 480px (mobile)
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="languages__container">
      <div className="languages__title">
        <h2>Learn, Speak, Connect</h2>
        <p>Explore our available languages and see what’s coming next!</p>
      </div>

      <Slider {...settings}>

        <LanguageCard
          language={{
            name: 'Spanish',
            short: 'sp',
            imgUrl: '',
            color: 'var(--red)'
          }}
        />

        <LanguageCard
          language={{
            name: 'Portuguese',
            short: 'pt',
            imgUrl: '',
            color: 'var(--yellow)'
          }}
        />

        <LanguageCard
          language={{
            name: 'Filipino',
            short: 'fil',
            imgUrl: '',
            color: 'var(--green)'
          }}
        />

        <LanguageCard
          language={{
            name: 'French',
            short: 'fr',
            imgUrl: '',
            color: 'var(--main-blue)'
          }}
        />


      </Slider>


      <div className="languages__more action_hover">
        <Link to="/resources">
          <h6>More resources <i className="fa-solid fa-arrow-right"></i></h6>
        </Link>
      </div>


    </div>

  )
}
