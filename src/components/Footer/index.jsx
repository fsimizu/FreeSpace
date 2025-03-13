import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';
import { handleScroll } from "../../utils/functions";


export function Footer() {


    return (
        <div className="footer__container">
            <Link to="/">
                <div className="footer__logo" onClick={() => { handleScroll('heroHome') }}><img src="src/assets/images/logo.svg" alt="logo" /></div>
            </Link>

            <div className="footer__links">
                <ul>
                    <Link to="/about-us">
                        <h5>About us</h5>
                    </Link>
                    <Link to="/">
                        <div>Buy us a coffee</div>
                    </Link>
                    <Link to="/resources">
                        <h5>Resources</h5>
                    </Link>
                    <Link to="/">
                        <div>Languages</div>
                    </Link>
                    <Link to="/">
                        <div>Vocabulary</div>
                    </Link>
                    <Link to="/">
                        <div>Tips & Strategies</div>
                    </Link>
                </ul>
            </div>

            <div className="footer__email">
                <i className="fa-regular fa-envelope"></i>
                <h6>Email</h6>
                <a href="mailto:freespace@vizarsolutions.com?subject=Hello"><p>freespace@vizarsolutions.com</p></a>
            </div>


            <div className="col-12 col-lg-4 footer__social">
                <div className="footer__icon"><a href="https://www.youtube.com/@FS_Learn" role="button"><i className="fab fa-youtube fa-lg"></i></a></div>
                <div className="footer__icon"><a href="https://www.facebook.com/profile.php?id=61569138959083" role="button"><i className="fab fa-facebook-f fa-lg"></i></a></div>
                <div className="footer__icon"><a href="https://ko-fi.com/fs_learn" role="button"><i className="fab fas fa-ko-fi fa-lg"></i></a></div>
            </div>

            <div className="footer__copyright">
                <p>© Copyright FreeSpace</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}