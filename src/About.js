import React from "react"
import ReactDOM from "react-dom"
import img from "./Image1.jpg"

function About(){
    return(
        <div>
            <div className="abt">
                <p><b>What We</b> Do</p>
            </div>
            <div className="img1">
                <img src={img} />
            </div>
        <div className="abt-c">
        <p>We transform organisations from within.<br/>
        We work directly with executives at large<br/>
        organisations to reimagine their future.<br/>
        Together, we define a single Northstar<br/>
        based on buisness priorities to design<br/>
        better processes , products and services.
        </p>
        </div>

        </div>
    );
}

export default About;