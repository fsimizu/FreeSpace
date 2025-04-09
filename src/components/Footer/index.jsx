import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';
import { scrollTo } from "../../utils/functions";


export function Footer() {

    const handleScroll = (id) => {
        setTimeout(() => { scrollTo(id) }, 200);
    };

    return (

        <>
            <div>
                <svg width="100%" height="100px" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,50 C300,0 900,100 1200,50 L1200,100 L0,100 Z" style={{ fill: 'var(--light-grey)' }}></path>
                </svg>
            </div>

            <div className="footer__container-global">
                <div className="footer__container max-width relative">
                    <div className="footer__logo" onClick={() => { handleScroll('heroHome') }}>
                        <Link to="/">
                            <img src="/images/logo.svg" alt="logo" />
                        </Link>
                    </div>

                    <div className="footer__links">

                        <div>
                            <ul>
                                <Link to="/about-us">
                                    <h5>About us</h5>
                                </Link>
                                <Link to="https://ko-fi.com/fs_learn">
                                    <p>Buy us a coffee</p>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <Link to="/resources">
                                    <h5>Resources</h5>
                                </Link>
                                <Link to="/resources/tips">
                                    <p>Tips & Strategies</p>
                                </Link>
                                <Link to="/resources">
                                    <p>Mock tests</p>
                                </Link>
                                <Link to="/resources/vocabulary">
                                    <p>Vocabulary</p>
                                </Link>
                            </ul>
                        </div>

                    </div>

                    <div className="footer__email">
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <h6>Email</h6>
                        </div>
                        <a href="mailto:freespace@vizarsolutions.com?subject=Hello"><p>freespace@vizarsolutions.com</p></a>
                    </div>


                    <div className="footer__social">
                        <div className="footer__icon"><a href="https://www.youtube.com/@FS_Learn" role="button"><i className="fab fa-youtube fa-lg"></i></a></div>
                        <div className="footer__icon"><a href="https://www.facebook.com/profile.php?id=61569138959083" role="button"><i className="fab fa-facebook-f fa-lg"></i></a></div>
                        <div className="footer__icon"><a href="https://ko-fi.com/fs_learn" role="button"><i className="fab fas fa-ko-fi fa-lg"></i></a></div>
                    </div>

                    <div className="footer__copyright">
                        <p>© Copyright FreeSpace. All rights reserved</p>
                    </div>

                </div>
            </div >
        </>
    )
}