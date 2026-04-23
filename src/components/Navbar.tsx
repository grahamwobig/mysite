import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
    //store active section
    const [activeSection, setActiveSection] = useState("");

    //set the threshold for section visibility to 80%
    const observerOpts = {
        threshold: 0.8
    };

    //use intersection observer to figure out which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                })
        }, 
        observerOpts);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [])

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#about" className={`navbar-link ${activeSection === "about" ? "active" : ""}`}>
                        <p>&rarr;</p>
                        <span>About</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#experience" className={`navbar-link ${activeSection === "experience" ? "active" : ""}`}>
                        <p>&rarr;</p>
                        <span>Experience</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}>
                        <p>&rarr;</p>
                        <span>Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;