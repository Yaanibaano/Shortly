import React, { Component } from 'react';
import "../App.css";

var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${"/images/bg-shorten-desktop.svg"})`
};

const imgurl = '/images/icon-brand-recognition.svg';
export const CustomCards = (img=imgurl,title,description) =>{
    return(
        <div className="main-custom-outline">
        <div className="card-custom-image">
                <img src={imgurl} className="img-fluid"></img>
        </div>
        <div className="custom-card mt-5">
            <div className="card-heading">
                <h2>Brand Recognition</h2>
            </div>
            <div className="card-description">
                <p>Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content</p>
            </div>
        </div>
        </div>
    );
}

export const ShortLinkListItem = (originalLink,shortendLink,copied) =>{
    return (
        <div className="row justify-content-center">
        <div className="row  linkListCard container mx-5 mx-lg-0">
            <div className="col-lg-7 col-12 olink row">
                <div className="mt-3 ml-3 ml-lg-0">   
                    <p>https://www.frontendmentor.io</p>
                </div>
            </div>
            <div className="col-lg-3 col-12 slink row justify-content-lg-end justify-content-start">
                <p className="mt-3 text-left">https://rel.ink/4klKyk</p>
            </div>
            <div className="col-12 col-lg-2 row">
                <button className="btn btn-danger my-2 ">Copy</button>
            </div>
        </div>
        </div>
    );
}

class MainForm extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row justify-content-center mx-lg-0 mx-4">
                <form className="row container justify-content-center mainForm py-5" style={sectionStyle}>
                    <div className="col-lg-9 col-12 row m-lg-auto justify-content-center mb-4">
                        <input className="form-control" placeholder="Shorten a link here..."></input>
                    </div>
                    <div className="col-lg-3 col-12 row m-lg-auto justify-content-center">
                        <button className="btn btn-danger col-12">Shorten It!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainForm