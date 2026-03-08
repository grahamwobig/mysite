import { useState } from "react";

function Homepage() {
    const [currText, setCurrText] = useState("Software Engineer");
    const textWrapping = () => {
        const text = ["Automation Engineer", "Project Manager", "Product Designer"];
        
    }
    return (
        <div className="homepage-container">
            <div className="homepage-name">Graham</div>
            <div className="homepage-animation">{currText}</div>
            <div>
                <p>
                    Full Stack Software Engineer meets Process Automation Engineer. 
                    Motivated by the challenges of working on multi-disciplinary projects.
                </p>
            </div>
            <div>
                <a>Learn More</a>
                <a>Contact Me</a>
            </div>
        </div>
    );
}

export default Homepage;