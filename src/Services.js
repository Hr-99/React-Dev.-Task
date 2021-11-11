import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import img2 from "./Image2.jpg"
import web from "./Tailor-Made-Web-Apps.jpg"
import ds from "./Data-Science.jpg"
import cs from "./Cyber-Security.jpg"
import rpa from "./Automation-Services.jpg"
import cloud from "./Cloud-Services.jpg"
import develop from "./Website-Development.jpg"


function Services(){
    return(
        <div>
            <div className="st">
                <p>Our <b>Services</b></p>

            </div>
            <div className="s-p">
                <p>Stitching tech stacks to come up with a comprehensive<br/>
                solution that transforms your buisness.
                </p>
            </div>
            <div className="s-i">
            <img src={img2}/>
            </div>
            <div className="ser">
            <span><img src={web}/> </span><span><p>Tailor-Made Web Apps</p></span><br/>
            <hr/>
            <span><img src={ds}/> </span><span><p>Data Science</p></span><br/>
            <hr/>
            <span><img src={cs}/> </span><span><p>Cyber Security</p></span><br/>
            <hr/>
            <span><img src={rpa}/> </span><span><p>RPA</p></span><br/>
            <hr/>
            <span><img src={cloud}/> </span><span><p>Cloud Services</p></span><br/>
            <hr/>
            <span><img src={develop}/> </span><span><p>Website Development</p></span>
        </div>
        </div>

    );
}

export default Services;