import React, { Component,useState} from 'react';
import {Input,Form,FormFeedback} from "reactstrap"
import "../App.css";

var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${"/images/bg-shorten-desktop.svg"})`
};

export const CustomCards = ({img,title,description}) =>{
    return(
        <div className="main-custom-outline">
        <div className="card-custom-image">
                <img src={img} className="img-fluid"></img>
        </div>
        <div className="custom-card mt-5">
            <div className="card-heading">
                <h2>{title}</h2>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
}

const ShortLinkListItemElement = ({originalLink,shortendLink,copied}) =>{

    const [isCopied,copiedState] = useState(false)
    
    return (      
        <div className="row linkListCard container mx-lg-auto mx-auto w-75 mb-2">
            <div className="col-lg-7 col-12 olink row m-0">
                <div className="mt-3 ml-lg-0">   
                    <p>{originalLink}</p>
                </div>
            </div>
            <div className="col-lg-3 col-12 slink row justify-content-lg-end justify-content-start">
                <p className="mt-3 text-left" id="myshortLink">{shortendLink}</p>
            </div>
            <div className="col-12 col-lg-2 row ml-1 mb-lg-0 mb-2 ">
                <button className="btn btn-danger my-2 col-12" 
                onBlur={()=>copiedState(false)}
                onFocus={() => copiedState(true)}
                onClick={() => {navigator.clipboard.writeText(shortendLink)}}>
                     {isCopied?"Copied":"Copy"}
                </button>
            </div>
        </div>
    );
}

export const ShortLinkListItem = (props)=>{
    return(
        props.items.map((item,i)=>{
            return <ShortLinkListItemElement key={i} originalLink={item.original} shortendLink={item.short} copied={false}/>
        })
    );
}

export const AdvancedItems = () =>{
    return(
        <div className="row justify-content-center">
            <div className="container advancedItems">
                <div className="heading mx-md-0 mx-4">
                    <h1>Advanced Statistics</h1>
                    <p className="mx-md-auto mx-4">Track how your links are performing across the web with our advanced statistics dashboard</p>    
                </div>
            </div>
        </div>
    );
}

class MainForm extends Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.state = {
            link:"",
            touched : false
        }
    }


    handleBlur = (field) => (event) =>{
        console.log("blurrred")
        this.setState(
            {
                touched:true
            }
        )
    }

    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState({
            link:event.target.value
        })
    }

    handleSubmit(e){
        const apiLink = `https://api.shrtco.de/v2/shorten?url=${this.state.link}`
        e.preventDefault();

        const isLink = (link)=>{
            
        }

        if(this.state.link==""&&isLink(this.state.link)){
            console.log("Failed")
            return ;
        }
        fetch(apiLink,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
        var val = {
                short:data.result.short_link,
                original:data.result.original_link
        }
        this.props.onClick(val)
      }
     )
    }

    validate(){
        if(this.state.touched && this.state.link.length == 0){
            return "Please add a link"
        }
        else{
            return ""
        }
    }

    render(){
        const err = this.validate()
        return(
            <div className="row justify-content-center mx-lg-0 mx-4">
                <Form className="row container justify-content-center mainForm py-5" style={sectionStyle}  onSubmit={this.handleSubmit}>
                    <div className="col-lg-9 col-12 row m-lg-auto justify-content-center mb-4">
                        <Input invalid={err!=""} name="link" onBlur={this.handleBlur("testy")} onChange={this.handleChange} className="form-control" placeholder="Shorten a link here..."></Input>                       
                    </div>
                    <div className="col-lg-3 col-12 row m-lg-auto justify-content-center">
                        <button className="btn btn-danger col-12">Shorten It!</button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default MainForm