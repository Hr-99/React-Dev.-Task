import React from "react"
import ReactDOM from "react-dom"
import "./style.css"


function Mission(){
    return(
        <div>
            <div className="ms">
            <p id="one">Built For Mission</p>
            <p id="two"><b>Critical Use Cases</b></p>
            <p id="three">By Role</p>

            </div>
            <div>
                <form>
                    <input id="cto" type="button" value="CTO"/>
                    <input id="ad" type="button" value="Agency Director"/>
                    <input id="ev" type="button" value="Engineering VP"/>
                    <input id="dd" type="button" value="Design Director"/>
                    <input id="pm" type="button" value="Product Manager"/>
                    <input id="pmn" type="button" value="Project Manager"/>
                </form>
            </div>
            <div>
                <p id="case"><b>By Use Case</b></p>
                <form>
                <input id="dtd" type="button" value="Go From Design To Development"/>
                    <input id="hd" type="button" value="Hire Developers On Demand"/>
                    <input id="wm" type="button" value="Web-To-Mobile Conversion"/>
                    <input id="d" type="button" value="Digital Transformation Development"/>
                    <input id="ba" type="button" value="Buisness Intelligence & Analysis"/>
                    <input id="rc" type="button" value="Regulatory Compliance Development"/>
                </form>
            </div>
            <div>
                <p id="ver">By Vertical</p>
                <form>
                <input id="hc" type="button" value="Health Care"/>
                    <input id="te" type="button" value="Technology"/>
                    <input id="ed" type="button" value="Education"/>
                    <input id="fi" type="button" value="Finance"/>
                    <input id="le" type="button" value="Legal"/>
                    <input id="lo" type="button" value="Logistics"/>
                </form>
            </div>
        </div>
    );
}

export default Mission;