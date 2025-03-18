import React from "react";
import { Link } from 'react-router-dom';
import { handleScroll } from "../../utils/functions";
import { useState, useEffect, useRef } from "react";


import './navbar.css';

export function Navbar() {

  const handleCloseClick = () => {
    document.getElementById("myNav").style.height = "0%";
    setIsOverlayActive(!isOverlayActive);
  };

  const handleOpenClick = () => {
    // console.log('click!')
    document.getElementById("myNav").style.height = "100%";
    setIsOverlayActive(!isOverlayActive);
  };


  // $( function(){ setTimeout( ()=> {
  //     let url = window.location.href; 
  //     $(".nav-item .nav-link").each( function() {
  //         if(url.includes(this.id.substring(4))) { 
  //             $(this).addClass("nav-item-active");
  //         }
  //     });
  // }, 250)
  // });

  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    if (isOverlayActive) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounting
    };
  }, [isOverlayActive]);



  const [isSticky, setIsSticky] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
<>

    <div className="navbar__container">
      {/* Overlay */}
      <div id="myNav" className="overlay" >
        <a /*href="javascript:void(0)"*/ className="closebtn" onClick={handleCloseClick}>&times;</a>
        <div className="overlay-content">
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('heroHome') }}>Home</div>
          </Link>
          <Link to="/about-us">
            <div onClick={() => { handleCloseClick; handleScroll('heroCommon') }}>About us</div>
          </Link>
          <Link to="/resources">
            <div onClick={() => { handleCloseClick }}>Resources</div>
          </Link>
          <div className="overlay__social-media">
            <div className="icon__social-media"><a href="https://www.facebook.com/HOOPPeru/" role="button"><i className="fab fa-facebook-f fa-md text-blue"></i></a></div>
            <div className="icon__social-media"><a href="https://www.youtube.com/@FS_Learn" role="button"><i className="fab fa-youtube fa-md"></i></a></div>
            <div className="icon__social-media"><a href="https://ko-fi.com/fs_learn" role="button"><i className="fab fas fa-ko-fi fa-md"></i></a></div>
          </div>
        </div>
      </div>


      {/* Navbar */}
      
      <nav className={`navbar ${isSticky ? "navbar--fixed" : ""}`}>

        {/* Navbar mobile */}
        <div className="container-fluid align-items-end">
          <Link to="/">
            <div className="navbar-brand" onClick={() => { handleScroll('heroHome') }}><img src="/images/logo.svg" alt="logo" /></div>
            
          </Link>
          <button onClick={handleOpenClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          
        </div>
        

        {/* Navbar web */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link text-grey" id="nav_about" onClick={() => { handleScroll('heroCommon') }}>About us</div>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav_about-us">Resources</a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about-us">
                    <div className="dropdown-item" onClick={() => { handleScroll('heroCommon') }}><p>Mock tests</p></div>
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    <div className="dropdown-item" onClick={() => { handleScroll('our-results') }}><p>Vocabulary</p></div>
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    <div className="dropdown-item" onClick={() => { handleScroll('ourPurpose') }}><p>Tips & Strategies</p></div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link text-grey" id="nav_about" onClick={() => { handleScroll('heroCommon') }}>Support us</div>
              </Link>
            </li>


          </ul>
        </div>
      </nav>
        <div ref={triggerRef}></div>

    </div>
    
    </>
  )
}