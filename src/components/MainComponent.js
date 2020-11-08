import React, { Component } from "react";
import MyNavBar from "./NavBar"
import {Hero} from "./HeroPage"
import {PreFooter,Footer} from "./Footer"
import "../App.css"

export const MainC = () => {
    return (
        <h1>Hellow world</h1>
    );
}

class MainComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <MyNavBar></MyNavBar>
                <Hero></Hero>
                
                <Footer></Footer>
                
            </React.Fragment>
        );
    }
}

export default MainComponent

 







