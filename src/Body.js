import React from "react"
import ReactDOM from "react-dom"
import image from "./Image.jpg"
import "./style.css"

function Body(){
    return(
        <div>
        <div className="b-img">
            <img src={image}/>
        </div>
        <div className="bt">
            <span className="s1"><b>We</b> Are</span><br/>
            <span className="s2">think</span><br/>
            <span className="s3"><b>gestalt</b></span>
        </div>


        <p className="content">We're a group of designers and developers who treats our own company<br/>as a product. How we work
        today is the result of a decade of iterations on<br/> our processes and tools. We work in small teams, using
        the latest tools to<br/> create a reansparent and collaberative space.
        </p>
        </div>
    
    );
}

export default Body;