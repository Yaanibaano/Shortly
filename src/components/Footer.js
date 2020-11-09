import React from "react";
import "../App.css"

var sectionStyle = {
    width: "100%",
    height: "200px",
    backgroundImage: `url(${"/images/bg-boost-desktop.svg"})`
};
  

export const PreFooter = () =>{
    return(
        <div className="row">
        <div className="pre-footer-bg" style={sectionStyle}>
        <div className="content">
            <h1>Boost your links today</h1>
            <div className="my-nav-items blue-oval mt-4">
                <a href="/">Get Started</a>
            </div>
        </div>
        </div>
        </div>
    );
}

export const Footer = () =>{
    return(
        <div>
        <PreFooter />
        <div className="footer row justify-content-center">
            <div className = "row justify-content-between container">
                <div className="col-12 col-lg-2 row justify-content-center m-lg-0 ml-2">
                    <a href="/" className="footer-brand  mr-3">Shortly</a>
                </div>
                <div className="col-12 row col-lg-7 justify-content-end mt-2">
                <div className="col-12 col-lg-3 row justify-content-center mr-lg-2 mt-lg-0 mt-5">
                        <div>
                        <p className="list-header text-lg-left text-center">Features</p>
                            <ul>
                                <li><a href="/" >Link Shortening</a></li>
                                <li><a href="/" >Branded Links</a></li>
                                <li><a href="/">Analytics</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 row justify-content-center mt-lg-0 mt-4">
                        <div>
                        <p className="list-header">Resources</p>
                            <ul>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Developers</a></li>
                                <li><a href="/">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 row justify-content-center mt-lg-0 mt-4">
                        <div>
                            <p className="list-header">Company</p>
                            <ul>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Our Team</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 row mt-lg-0 mt-5 justify-content-between">
                    <img src="/images/icon-facebook.svg"></img>
                    <img src="/images/icon-instagram.svg"></img>
                    <img src="/images/icon-pinterest.svg"></img>
                    <img src="/images/icon-twitter.svg"></img>
                </div>
            </div>
        </div>
        </div>
    );
}