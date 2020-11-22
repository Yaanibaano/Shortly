import React from "react";
import MainForm from "./Mini-Components";
import "../App.css"

var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${"/images/illustration-working.svg"})`
};

export const Hero = () => {
    return (
        <div className="row justify-content-center mx-md-0 mx-3">
            <div className="container mb-5">
                <div className="row hero ">
                    <div className="col-12 col-lg-6 hero-padding">
                        <h1 className="hero-text">More than just shorter links</h1>
                        <p className="hero-sub-text">Build your brands recognition and get detailed insights on how your links are performing</p>
                        <div className="my-nav-items blue-oval">
                            <a href="/">Get Started</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 row hero-img" >
                        <img src="/images/illustration-working.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}