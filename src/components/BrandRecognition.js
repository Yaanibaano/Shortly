import React from "react";
import {CustomCards} from "./Mini-Components"

const imgurl1 = '/images/icon-brand-recognition.svg';
const imgurl2 = '/images/icon-detailed-records.svg';
const imgurl3 = '/images/icon-fully-customizable.svg';

const description1 = "Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content";
const description2 = "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions";
const description3 = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement";

export const BrandRecognition = () => {  
    return(
    
        <div className="row container justify-content-lg-between brnd m-auto z1">
            <div className="col-lg-4 col-12 row justify-content-center z4">
                <CustomCards img={imgurl1} description={description1} title="Brand Recognition"></CustomCards>
            </div>
            <div className="col-lg-4 col-12 row justify-content-center mt-lg-4 mt-3">
                <CustomCards img={imgurl2} description={description2} title="Detailed Records"></CustomCards> 
            </div>
            <div className="col-lg-4 col-12 row justify-content-center mt-lg-5 mt-3 ">
                <CustomCards img={imgurl3} description={description3} title="Fully Customizable"></CustomCards>
            </div>
        </div>
    );
}