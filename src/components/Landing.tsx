import FadingTypewriter from "./FadingTypewriter";
import Button from "./Button";
import "../styles/Landing.css";

function Landing() {
    return (
        <section className="homepage-container" id="landing">
            <div className="homepage-background">
                <div className="homepage-gradient"></div>
            </div>
            <div className="homepage-content">
                <span className="homepage-greeting">Hey, I'm</span>
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
                        Software Engineer meets Automation Engineer. 
                        I enjoy the unique challenges of working on multi-disciplinary projects.
                    </p>
                </div>
                <div className="landing-buttons">
                    <Button buttonText="Learn More" />
                    <Button buttonText="Contact Me" />
                </div>
            </div>
        </section>
    );
}

export default Landing;