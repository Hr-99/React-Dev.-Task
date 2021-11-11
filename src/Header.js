import React from "react"
import ReactDOM from "react-dom"
import header from "./header.jpg"
import sd from "./Scroll-Down.jpg"
import "./style.css"

function Header() {
    return (
        <div>
            <img src={header} />
            <div className="nav">
                <span>think<b>gestalt.</b>tech</span>
                <a style={{ marginLeft: 951 }}><b>Menu</b></a>
                
            </div>
            <div>
            <span className="line"><i>Is Your Enterprise</i> </span>
            <span className="line2"><b>Future Ready?</b></span>
            </div>
            <span className="sd">
                <img src={sd}/>
            </span>
        </div>

    );
}

export default Header;