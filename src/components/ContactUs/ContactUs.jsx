import ContactForm from "./ContactForm.jsx";
import formdetailbg from "../../assets/detail02.png";
import Footer from "../../common/Footer";
import './ContactUs.css';

const ContactUs = () => {
  
  return (
    <section className="vertical-scrolling" id="recipesSection">
    <div className="Contact-us">
      <div className="Contact-us-container">
        <div className="collaborate-container">
          <div className="collaborate-title">
            <span className="collaborate-title-sm">COLLABORATE</span>
            <span className="collaborate-title-lg">WITH US</span>
          </div >
          <div className="collaborate-context">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
        <div className="collaborate-form-container">
          <img src={formdetailbg} alt="form bg" className="formdetailbg" />
          <ContactForm />
        </div>
      </div>
      </div>
      <Footer />
    </section>
  );
}
export default ContactUs;