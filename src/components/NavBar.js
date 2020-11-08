import React, { Component } from "react";
import "../App.css"

export const collapsedItems = (isOpen)=>{
    if(isOpen){
    return(
        <React.Fragment>
        <div class="custom-card">
            <div className="row justify-content-center my-nav-items-sm">
                <a href="/" className="my-nav-items mt-3 mb-4">Features</a>
            </div>
            <div className="row justify-content-center my-nav-items-sm">
                <a href="/" className="mb-4">Pricing</a>
            </div>
            <div className="row justify-content-center my-nav-items-sm">
                <a href="/" className="mb-4">Resources</a>
            </div>
            <div className="row justify-content-center mb-4 ">
                <div className="divider"></div>
            </div>
            <div className="row justify-content-center mb-4 my-nav-items-sm">
                <a href="/" >Login</a>
            </div>
            <div className="row justify-content-center my-nav-items-sm">
                <a href="/" className="blue-oval col-10 mb-4">Sign Up</a>
            </div>
        </div>
        </React.Fragment>
    );}
    else{
        <div></div>
    }
} 

class MyNavBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav(){
        this.setState({isOpen:!this.state.isOpen})
        console.log(this.state.isOpen)
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-red ml-5 ml-lg-0 justify-lg-content-center justify-content-between">
                    <div className="col-2 row justify-content-center text-center">
                        <a className="brand" href="/">Shortly</a>
                    </div>
                    <div className="col-7 row bg-yellow ml-3 d-lg-flex d-none">
                        <div className="col-2 my-nav-items">
                            <a href="/">Features</a>
                        </div>
                        <div className="col-2 my-nav-items">
                            <a href="/">Pricing</a>
                        </div>
                        <div className="col-2 my-nav-items">
                            <a href="/">Resources</a>
                        </div>
                    </div>
                    <div className="col-3 row bg-green d-lg-flex d-none">
                        <div className="col-5 my-nav-items">
                            <a href="/">Log-in</a>
                        </div>
                        <div className="col-6 my-nav-items blue-oval">
                            <a href="/">Sign Up</a>
                        </div>
                    </div>
                    <div className="col-3 row d-lg-none justify-content-center ml-3">
                        <span className="fa fa-bars fa-2x" onClick={this.toggleNav}></span>
                    </div>
                </div>
                <div className="d-lg-none">
                    {collapsedItems(this.state.isOpen)}
                </div>
            </div>
        )
    }
}

export default MyNavBar