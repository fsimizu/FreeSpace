import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';
import { scrollTo } from "../../utils/functions";


export function Footer() {

    const handleScroll = (id) => {
        setTimeout(() => { scrollTo(id) }, 200);
    };

    return (
        <div className="footer__container-global">

            {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none footer_edge">
                <svg viewBox="0 0 1440 250" className="w-full h-20">
                    <path
                        style={{
                            fill: "var(--main-blue)",
                            stroke: "var(--main-blue)"
                        }}
                        fillOpacity="1"
                        d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,181.3C672,192,768,224,864,229.3C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
                    ></path>
                </svg>
            </div> */}

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none footer_edge">
                <svg viewBox="0 0 1440 200" className="w-full h-12" preserveAspectRatio="none">
                    <path
                        style={{
                            fill: "var(--main-blue)",
                            stroke: "var(--main-blue)"
                        }}
                        fillOpacity="1"
                        d="M0,80 C60,120 120,60 200,100 C280,140 360,60 440,100 C520,140 600,60 680,100 C760,140 840,60 920,100 C1000,140 1080,60 1160,100 C1240,140 1320,60 1440,80 L1440,200 L0,200Z"
                    />
                </svg>
            </div>



            <div className="footer__container relative">

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
    )
}