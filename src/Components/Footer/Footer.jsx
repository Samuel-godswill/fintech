import React from "react";
import "./Footer.css";
import logo from "../assets/footer-logo.png";
import download from "../assets/download.png";
import socials from "../assets/socials.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="logos" src={logo} alt="Company Logo" />
        <img src={download} alt="Download Icon" />
         <section className="footer-links">
         <ul>
            <li>personal loan</li>
            <li>one card</li>
            <li>savings</li>
            <li>checking</li>
            <li>contact</li>
            <li>help</li>
            <li>support</li>
          </ul>
         </section>
        <img src={socials} alt="Social Media Icons" />
        <p className="t">Send Your Feedback : <span>moc.edargpu@tcatnoc</span></p>
         <section className="footer-links"> 
         <ul>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Terms & Condition</li>
            <li>|</li>
            <li>Cookie Notice</li>
            <li>|</li>
            <li>Copyright Policy</li>
            <li>|</li>
            <li>Data Policy</li>
          </ul>
         </section>
        <p className="u">© 2024 Design Monks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
