import Typewriter from "./Typewriter";

function Landing() {
    return (
        <section className="homepage-container" id="landing">
            <span className="homepage-name">Graham</span>
            <div className="homepage-animation">
                <Typewriter 
                    strings={[
                        "Full Stack Developer",
                        "Automation Engineer",
                        "Product Designer",
                        "Project Manager"
                    ]}
                    delay={100}
                />
            </div>
            <div>
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