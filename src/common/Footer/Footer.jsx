import './Footer.css';
import socialLogo from "../../assets/social.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-upper-section">
          <div id="footer-sections">
            <div className="section-block">
              <span className="section-title">SECTION1</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
            </div>
            <div className="section-block">
              <span className="section-title">SECTION2</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
            </div>
            <div className="section-block">
              <span className="section-title">SECTION3</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
            </div>
            <div className="section-block">
              <span className="section-title">SECTION4</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
            </div>
            <div className="section-block">
              <span className="section-title">SECTION5</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
              <span className="subsection">Subsection</span>
            </div>
          </div>

          <div className="footer-logo-section">
            <div className="footer-logo">
              <span className="landing-text footer-size-med">THIS IS THE</span>
              <span className="landing-text footer-size-lrg">LOGO</span>
            </div>
          </div>
        </div>
        <div className="footer-lower-section">
          <div className="copyright-text">
            <span>2017. Company. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in</span>
          </div>
          <div className="social-icons">
            <img src={socialLogo} alt="social icons" className="socialLogo" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;