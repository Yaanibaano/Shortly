import React, { Component } from "react";
import "../App.css"

export const collapsedItems = (isOpen) => {
    if (isOpen) {
        return (
            <div>
                <div class="custom-card m-5">
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
            </div>
        );
    }
    else {
        <div></div>
    }
}

class MyNavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({ isOpen: !this.state.isOpen })
        console.log(this.state.isOpen)
    }

    render() {
        return (
            <div>
                <div className="row col-12  m-0 p-0 justify-content-center">
                <div className="my-container ">
                    <div className="row col-12 justify-sm-content-center justify-content-between">
                        <div className="col-lg-2 col-5 row justify-content-start text-sm-center mr-5">
                            <a className="brand " href="/">Shortly</a>
                        </div>
                        <div className="col-6 row justify-content-start ml-3 d-lg-flex d-none">
                            <div className="col-3 my-nav-items">
                                <a href="/">Features</a>
                            </div>
                            <div className="col-3 my-nav-items">
                                <a href="/">Pricing</a>
                            </div>
                            <div className="col-3 my-nav-items">
                                <a href="/">Resources</a>
                            </div>
                        </div>
                        <div className="col-4 row d-lg-flex justify-content-end d-none">
                            <div className="col-5 my-nav-items">
                                <a href="/">Log-in</a>
                            </div>
                            <div className="col-7 my-nav-items blue-oval">
                                <a href="/">Sign Up</a>
                            </div>
                        </div>
                        <div className="col-3 row d-lg-none justify-content-end">
                            <span className="fa fa-ellipsis-v fa-2x mt-3" onClick={this.toggleNav}></span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="d-lg-none row justify-content-center">
                    <div className="container">
                        {collapsedItems(this.state.isOpen)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNavBar