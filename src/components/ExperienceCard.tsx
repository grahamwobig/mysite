import '../styles/ExperienceCard.css';

interface ExperienceCardProps {
    date: string; //date range for the job experience
    companyName: string; //company name
    positionTitles: string[]; //job titles at the job
    url: string; //url for the position
    description: string; //description for the position
    technologies: string[]; //technologies used at the position
}

function ExperienceCard({
    date,
    companyName,
    positionTitles,
    url,
    description,
    technologies
}: ExperienceCardProps) {
    return (
        <div className="card">
            <div className="card-highlight"/>
            <header className="card-date">{date}</header>
            <div className="card-content">
                <h3 className="card-content-title">
                    {
                        positionTitles.map((title, index) => {
                            if (index == 0) {
                                return (
                                    <div>
                                        <a href={url} target="_blank" className="title-position-curr">
                                            <span>
                                                {`${title} -`}
                                                <span className="title-company-name">
                                                    {companyName}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                                    </svg>  
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                );
                            }
                            return <div>
                                <span className="title-position-prev">{title}</span>
                            </div>;
                        })
                    }
                </h3>
                <p className="card-content-descripiton">{description}</p>
                <ul className="card-content-tech">
                    {
                        technologies.map((technology) => {
                            return(
                                <li className="tech-li">
                                    <div className="tech-div">{technology}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;