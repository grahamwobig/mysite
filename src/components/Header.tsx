import '../styles/Header.css';
import Socials from './Socials';
import Navbar from './Navbar';
import FadingTypewriter from './FadingTypewriter';

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <h2 className="header-greeting">Hey, I'm</h2>
                <h1 className="header-name">Graham</h1>
                <FadingTypewriter strings={[
                    "Full Stack Developer",
                    "Automation Engineer",
                    "Product Designer",
                    "Project Manager"   
                ]} typeDelay={100} stringDelay={4000} cursorFade={500} textFade={300}/>
                <p className="header-blurb">
                    Software Engineer meets Automation Engineer. I'm motivated by the unique challenges of multi-disciplinary projects.
                </p>
                <Navbar/>
            </div>
            <Socials/>
        </header>
    );
}

export default Header;