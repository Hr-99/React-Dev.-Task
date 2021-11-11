import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import image4 from "./Image4.jpg"


function Contact(){
    return(
        <div>
            <div>
            <p id="con"><b>Let's talk. </b><i> Just enter your details</i></p>
            <p id="con1">and we will reply within 24 hours.</p>
            </div>
    
            <div className="con-i">
                <img src={image4}/>
            </div>
            <div className="contact">
                <form>
                    <input type="name" placeholder="Name*" required/>
                    <input id="ph" type="phone" placeholder="Phone Number*" required/><br/><br/>
                    <input type="email" placeholder="Email*" required/><br/><br/>
                    <label htmlFor="text">How Can We Help You?</label><br/><br/>
                    <textarea id="text" rows="6" cols="50"></textarea><br/><br/>
                    <input id="button" type="submit" value="Submit"/>
                </form>
            </div>
        </div>

    );
}

export default Contact;