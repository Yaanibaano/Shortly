import React, { Component } from "react";
import MyNavBar from "./NavBar"
import { Hero } from "./HeroPage"
import { Footer } from "./Footer"
import MainForm, { CustomCards, ShortLinkListItem } from "./Mini-Components";
import  MainBody from "./Body"
import "../App.css"

export const MainC = () => {
    return (
        <h1>Hellow world</h1>
    );
}

class MainComponent extends Component {

    

    render() {
        return (
            <React.Fragment>
                <MyNavBar></MyNavBar>
                <Hero></Hero>
                <MainBody></MainBody>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default MainComponent









