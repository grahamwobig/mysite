import FadingTypewriter from "./FadingTypewriter";
import "../styles/Landing.css";

function Landing() {
    return (
        <section className="homepage-container" id="landing">
            <span className="homepage-name">Graham</span>
            <div className="homepage-animation">
                <FadingTypewriter 
                    strings={[
                        "Full Stack Developer",
                        "Automation Engineer",
                        "Product Designer",
                        "Project Manager"
                    ]}
                    typeDelay={100}
                    stringDelay={4000}
                    cursorFade={500}
                    textFade={300}
                />
            </div>
            <div className="landing-banner">
                <p>
                    Full Stack Software Engineer meets Process Automation Engineer. 
                    Motivated by the challenges of working on multi-disciplinary projects.
                </p>
            </div>
            <div>
                <span>Learn More</span>
                <span>Contact Me</span>
            </div>
        </section>
    );
}

export default Landing;