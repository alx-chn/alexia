import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        // Return the cleanup function from inside the useEffect function
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div id="navContainer" className={isVisible ? "" : "hidden"}>
          <div id="nav">
            <span>
                <ScrollLink to="aboutMe" className="nav-link" smooth={true} duration={500}>About Me</ScrollLink>
            </span>
            <span>
                <ScrollLink to="edu" className="nav-link" smooth={true} duration={500}>Education</ScrollLink>
            </span>
            <span>
                <ScrollLink to="exp" className="nav-link" smooth={true} duration={500}>Experience</ScrollLink>
            </span>
            <span>
                <ScrollLink to="projects" className="nav-link" smooth={true} duration={500}>Projects</ScrollLink>
            </span>
            <span>
                <ScrollLink to="gallery" className="nav-link" smooth={true} duration={500}>Gallery</ScrollLink>
            </span>
            <span>
                <ScrollLink to="contactMe" className="nav-link" smooth={true} duration={500}>Contact</ScrollLink>
            </span>
          </div>
          <hr/>
        </div>
    );
}

export default NavBar;