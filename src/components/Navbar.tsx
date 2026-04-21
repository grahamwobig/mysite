import "../styles/Navbar.css";

function Navbar() {
    return (
        // <nav className="navbar">
        //     <div className="navbar-container">
        //         <div className="social-links">
        //             <p className="name">gw</p>
        //             <a target="_blank" href="https://www.github.com/grahamwobig">
        //                 <img src="/github_darkMode_32x32.png" alt="Github"/>
        //             </a>
        //             <a target="_blank" href="https://www.linkedin.com/in/graham-wobig/">
        //                 <img src="/linkedin_darkMode_32x32.png" alt="LinkedIn"/>
        //             </a>
        //         </div>

        //         <ul className="navbar-menu">
        //             <li><a href="#landing">Home</a></li>
        //             <li><a href="#about">About</a></li>
        //             <li><a href="#work">Work</a></li>
        //             <li><a href="#projects">Projects</a></li>
        //             {/* <li><Link to="/projects">Projects</Link></li>
        //             <li><Link to="/contact">Contact</Link></li> */}
        //             <li><a target="_blank" href="/resume.pdf">Resume</a></li>
        //         </ul>

        //         <div className="navbar-hamburger" onClick={toggleMenu}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>

        //     </div>
        // </nav>
        <nav className="navbar">
            <ul className="navbarList">
                <li className="navbarItem">
                    <a href="#about" className="navbarLink">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <span>Experience</span>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <span>Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;