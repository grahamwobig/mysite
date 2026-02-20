import { 
    useState,
} from "react";
import { Link } from "react-router";
import "../styles/Navbar.css";

function Navbar() {
    //state for hamburger menu
    const [isOpen, setIsOpen] = useState(false);

    //toggle hamburger menu
    const toggleMenu = () => setIsOpen(prev => !prev);
    //close hamburger menu
    const closeMenu = () => setIsOpen(false);

    // TODO- implement nice buttons for the navbar: https://codepen.io/wesbos/pen/jEbeNdw (inspiration)

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
                    <li><a target="_blank" href="/resume.pdf">Resume</a></li>
                </ul>

                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="/work" onClick={closeMenu}>Work</Link></li>
                        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                        <li><a target="_blank" href="/resume.pdf" onClick={closeMenu}>Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;