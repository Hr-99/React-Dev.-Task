import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Services from "./Services";
import CaseStudy from "./CaseStudy";
import Mission from "./Mission";
import Contact from "./Footer";

function App() {
    return (
        
        <>
        <Header />
        <Body />
        <About/>
        <Services/>
        <CaseStudy/>
        <Mission/>
        <Contact/>
        </>
        
    );
}

export default App;