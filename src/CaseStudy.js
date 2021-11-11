import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import case1 from "./Case1.jpg"
import case2 from "./Case2.jpg"
import left from "./LAB.jpg"
import right from "./RAB.jpg"



function CaseStudy() {
    return (
        <div>
            <div className="stu">
                <p>Case <b>Studies</b></p>
            </div>

            <div className="stu-i">
                <div className="row">
                    <div className="col">
                        <img src={case1} />
                    </div>

                    <div className="col">
                        <img src={case2} />
                    </div>
                </div>

                <div className="st-t">
                    <p id="a">ROBOTIC PROCESS AUTOMATION</p>
                      <p id="b"> <b>80% productivity gains in packaging company.</b>
                    </p>

                </div>
                <div className="st-tt">
                    <p id="c">CLOUD SERVICE</p>
                      <p id="ecom"> <b>Cloud based ecommerce</b>
                    </p>

                </div>

            </div>

            <div className="stu-ar">
                <img src={left}/>
            
            </div>
            <div className="stu-p">
                <p>1/3</p>
            </div>
            <div className="stu-arr">
            <img src={right}/>
            </div>
            <div className="stu-d">
                <p>With a decade of experience in <b>Web & Software Solutions, </b>access to <b>top<br/> tier talent, </b> 
                 we <strong>Fast Track</strong> the entire process and drive organizational<br/> change from within.
                We bring <strong>Careful Planning, Alignment, and Aggressive<br/> Execution</strong> so that you can glimps the 
                <b><u> Future today.</u></b>
                </p>
            </div>
        </div>
    );
}

export default CaseStudy;