import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Gallery from "./Gallery";
import ContactMe from "./ContactMe";

const Body = () => {
    return (
        <div>
        <NavBar />
        <Home />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Gallery/>
        <ContactMe />
        </div>
    );
}

export default Body;