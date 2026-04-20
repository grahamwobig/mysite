import '../styles/About.css';

function About() {
    const yearsCalc = () => {
        const start = new Date("2025-01-01");
        const diffMs = Date.now() - start.getTime();
        return Math.floor(diffMs/(1000 * 60 * 60 * 24 * 365.25));
    }

    return(
        <section className="about-page" id="about">
            <h1 className="about-heading"># About</h1>
            <div className="about-bio">
                <p>
                    I'm a Full Stack Developer with {yearsCalc()}+ years of experience.
                    For most of my career, I have been working on software for industrial automation.
                    This has allowed me to develop a skillset that encompasses both Software Engineering and
                    Process Automation.
                </p>
                <p>
                    As a Founding Engineer, I've gained firsthand experience building teams, development 
                    processes, client relationships and scalable software. I pride myself on being able to tackle engineering, 
                    managerial and business challenges.
                </p>
                <p>
                    Outside of work, you'll probably find me outdoors. I love spending my freetime
                    fly fishing, hiking or simply unplugging from the digital realm.
                </p>
            </div>
        </section>
    );
}

export default About;