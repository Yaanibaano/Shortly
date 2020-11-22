import React, { Component } from "react";
import MainForm,{ShortLinkListItem} from "./Mini-Components"
import {AdvancedItems} from "./Mini-Components"
import {BrandRecognition} from "./BrandRecognition";



class MainBody extends Component{

    constructor(props){
        super(props)
        this.state = {
            myList:[]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(obj){
        console.log(obj)
        var newList = this.state.myList;
        newList.push(obj)
        this.setState({
            myList: newList
        })
    }

    render(){
        return(
            <div className="mainBody pb-5">
            <div className="myform">
                <MainForm onClick={this.addItem}></MainForm>
                <ShortLinkListItem items={this.state.myList}></ShortLinkListItem>
                <AdvancedItems></AdvancedItems>
                <BrandRecognition></BrandRecognition>
            </div>
            <div className="sub">
            
            </div>
        </div>
        );
    }
}

export default MainBody