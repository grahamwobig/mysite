import React, { 
    useState,
} from "react";
import { Link } from "react-router";
import "../styles/Navbar.css";

function Navbar() {
    //state for hamburger menu
    const [isOpen, setIsOpen] = useState(false);

    //toggle hamburger menu
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="social-links">
                    <p>Graham Wobig</p>
                    <a target="_blank" href="https://www.github.com/grahamwobig">
                        <img src="/github_darkMode_32x32.png" alt="Github"/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/graham-wobig/">
                        <img src="/linkedin_darkMode_32x32.png" alt="LinkedIn"/>
                    </a>
                </div>
                <ul className="navbar-menu">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="/resume.pdf">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;