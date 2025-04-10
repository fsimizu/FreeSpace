import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { scrollTo } from "../../utils/functions";

import './navbar.css';

export function Navbar() {
  const location = useLocation();

  const handleScroll = (id) => {
    setTimeout(() => { scrollTo(id) }, 200);
    handleCloseClick();
  };

  const handleCloseClick = () => {
    document.getElementById("myNav").style.height = "0%";
    setIsOverlayActive(false);
  };

  const handleOpenClick = () => {
    document.getElementById("myNav").style.height = "100%";
    setIsOverlayActive(true);
  };

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

  const [brandFilter, setBrandFilter] = useState('none');
  useEffect(() => {
    const updateFilter = () => {
      if (window.innerWidth < 768) {
        setBrandFilter('invert(96%) sepia(18%) saturate(372%) hue-rotate(355deg) brightness(118%) contrast(99%)');
      } else {
        if (window.location.pathname === '/') {
          setBrandFilter('none');
        } else {
          setBrandFilter('invert(96%) sepia(18%) saturate(372%) hue-rotate(355deg) brightness(118%) contrast(99%)');
        }
      }
    }

    updateFilter();
    window.addEventListener('resize', updateFilter);
    return () => {
      window.removeEventListener('resize', updateFilter);
    };
  }, []);

  return (
    <div className="navbar__container"
      style={{
        position: location.pathname === '/' ? 'absolute' : 'absolute',
      }}
    >

      {/* Overlay */}
      <div id="myNav" className="overlay" >
        <a className="closebtn" onClick={handleCloseClick}>&times;</a>
        <div className="overlay-content">
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('heroHome') }}>Home</div>
          </Link>
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('aboutUs') }}>About us</div>
          </Link>
          <Link to="/resources">
            <div onClick={() => { handleCloseClick; handleScroll('root') }}>Resources</div>
          </Link>
          <div className="overlay__social-media">
            <div className="icon__social-media"><a href="https://www.facebook.com/profile.php?id=61569138959083" role="button"><i className="fab fa-facebook-f fa-md text-blue"></i></a></div>
            <div className="icon__social-media"><a href="https://www.youtube.com/@FS_Learn" role="button"><i className="fab fa-youtube fa-md"></i></a></div>
            <div className="icon__social-media"><a href="https://ko-fi.com/fs_learn" role="button"><i className="fab fas fa-ko-fi fa-md"></i></a></div>
          </div>
        </div>
      </div>


      {/* Navbar */}
      <div className="navbar-background"
        style={{
          backgroundColor: location.pathname === '/' ? '' : 'var(--main-blue)',
          position: 'absolute',
          width: '100%',
          height: '6vw',
          maxHeight: '90px',
          minHeight: '68px',
        }}
      ></div>

      <nav className={`navbar-expand-sm navbar ${isSticky ? "navbar--fixed" : ""}`}>

        <div className="container-fluid align-items-end max-width">

          {/* Navbar Logo */}
          <div className="navbar-brand" onClick={() => { handleScroll('heroHome') }}>
            <Link to="/">
              <img src="/images/logo.svg" alt="freeSpace_logo"
                style={{
                  border: location.pathname === '/' ? '1px solid var(--black)' : 'none',
                  filter: brandFilter
                }}
              />
            </Link>
          </div>

          {/* Navbar burger button */}
          <button onClick={handleOpenClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>

          {/* Navbar web */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('aboutUs') }}>About us</div>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/resources">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('root') }}>Resources</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://ko-fi.com/fs_learn">
                  <div className="nav-link">Support us</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div ref={triggerRef}></div>
    </div>
  )
}