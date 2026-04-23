import ExperienceCard from "./ExperienceCard";
import '../styles/Experience.css';

function Experience() {
    return (
        <section className="experience" id="experience">
            <div>
                <ol className="experience-list">
                    <li className="experience-item">
                        <ExperienceCard 
                            date={"Nov 2021 - Present"}
                            companyName={"AgileGxP Technologies"}
                            positionTitles={[
                                "Senior Application Engineer",
                                "Application Engineer",
                                "Junior Application Engineer"
                            ]}
                            url={"https://agilegxp.tech"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem ut arcu mattis eleifend. Maecenas accumsan risus consectetur, bibendum ipsum laoreet, molestie odio. Suspendisse convallis condimentum facilisis. Aenean ornare nulla eu aliquam auctor. Sed at finibus tortor. Cras bibendum scelerisque nisi eu rutrum. Praesent sagittis euismod mauris at facilisis. Nam efficitur, erat iaculis viverra sodales, massa ipsum faucibus lorem."}
                            technologies={[
                                "NextJS",
                                "SQLite",
                                "Sequelize ORM",
                                "NATS",
                                "MQTT",
                                "OPCUA",
                                "NodeJS",
                                "Jest"
                            ]}
                        />
                    </li>
                    <li className="experience-item">
                        <ExperienceCard
                            date="Jan 2021 - Nov 2021"
                            companyName="Upwork"
                            positionTitles={[
                                "Freelance Software Developer"
                            ]}
                            url="https://www.upwork.com/freelancers/~014d5ef50ea8c31393"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem ut arcu mattis eleifend. Maecenas accumsan risus consectetur, bibendum ipsum laoreet, molestie odio. Suspendisse convallis condimentum facilisis. Aenean ornare nulla eu aliquam auctor. Sed at finibus tortor. Cras bibendum scelerisque nisi eu rutrum. Praesent sagittis euismod mauris at facilisis. Nam efficitur, erat iaculis viverra sodales, massa ipsum faucibus lorem."
                            technologies={[
                                "Python",
                                "Raspberry Pi",
                                "Home Automation"
                            ]}
                        />
                    </li>
                    <li className="experience-item">
                        <ExperienceCard
                            date="Jun 2018 - Sept 2019"
                            companyName="Software Innovations Laboratory"
                            positionTitles={[
                                "Undergraduate Research Fellow"
                            ]}
                            url="https://website.cs.vt.edu/research.html"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem ut arcu mattis eleifend. Maecenas accumsan risus consectetur, bibendum ipsum laoreet, molestie odio. Suspendisse convallis condimentum facilisis. Aenean ornare nulla eu aliquam auctor. Sed at finibus tortor. Cras bibendum scelerisque nisi eu rutrum. Praesent sagittis euismod mauris at facilisis. Nam efficitur, erat iaculis viverra sodales, massa ipsum faucibus lorem."
                            technologies={[
                                "C",
                                "C++",
                                "Middleware",
                                "LLVM"
                            ]}
                        />
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Experience;