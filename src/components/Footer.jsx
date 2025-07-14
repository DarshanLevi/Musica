import "./Footer.css";
import logo from "../assets/Musica.svg";
import { FaApple, FaGooglePlay, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left side mascot */}
        <div className="footer-logo">
          <img src={logo} alt="Musica Logo" />
          <div className="store-buttons">
            <button className="store-btn">
              <FaApple /> iOS
            </button>
            <button className="store-btn">
              <FaGooglePlay /> Android
            </button>
          </div>
        </div>

        {/* Center navigation columns */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Our company</h4>
            <ul>
              <li>About MUSICA</li>
              <li>Careers</li>
              <li>Diversity, equity & inclusion</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Fan support</h4>
            <ul>
              <li>Get help</li>
              <li>FAQs</li>
              <li>Request a refund</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Press</li>
              <li>Partners ↗</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© MUSICA Holdings Ltd</p>
        <p>English (UK) ▼</p>
        <div className="footer-policy-links">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Purchase Terms</span>
          <span>Cookie Settings</span>
        </div>
        <div className="footer-socials">
          <FaInstagram />
          <FaTiktok />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
