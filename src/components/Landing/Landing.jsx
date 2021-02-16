import './Landing.css';
import landinglogo from "../../assets/stamp.png";

const Landing = () => {
    return (
        <div id="landing">
            <div className="landing-logo">
                <img alt="LOGO" src={landinglogo} className="landing-logo-img" />
            </div>
            <div className="landing-center-text">
                <span className="landing-text landing-size-med">THE BEST FOODIE</span>
                <span className="landing-text landing-size-lrg">EXPERIENCE</span>
                <span className="landing-text landing-size-sml">NOW IN LONDON</span>
            </div>
        </div>
    );
}

export default Landing;