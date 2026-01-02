import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT */}
        <div className="footer-col">
          <h2 className="footer-logo">Purvika Interio</h2>
          <p>
            Purvika Interio is driven by creativity, originality and enthusiasm.
            We specialize in residential & commercial interior solutions with
            quality and elegance.
          </p>
        </div>

        {/* COMMERCIAL DESIGN */}
        <div className="footer-col">
          <h3>Commercial Design</h3>
          <ul>
            <li>
              <Link
                className="footer-li-submenu"
                to="/commercial/modular-office-furniture"
              >
                Modular Office Furniture
              </Link>
            </li>
            <li>
              <Link
                className="footer-li-submenu"
                to="/commercial/institutional-office-furniture"
              >
                Institutional Furniture
              </Link>
            </li>
            <li>
              <Link className="footer-li-submenu" to="/commercial/chair">
                Chairs
              </Link>
            </li>
            <li>
              <Link className="footer-li-submenu" to="/commercial/sofa">
                Sofa
              </Link>
            </li>
            <li>
              <Link
                className="footer-li-submenu"
                to="/commercial/turnkey-solution"
              >
                Turnkey Solution
              </Link>
            </li>
          </ul>
        </div>

        {/* RESIDENTIAL DESIGN */}
        <div className="footer-col">
          <h3>Residential Design</h3>
          <ul>
            <li>
              <Link className="footer-li-submenu" to="/residential/living-room">
                Living Room Interior
              </Link>
            </li>
            <li>
              <Link className="footer-li-submenu" to="/residential/bedroom">
                Bedroom Interior
              </Link>
            </li>
            <li>
              <Link
                className="footer-li-submenu"
                to="/residential/kitchen-trolley"
              >
                Kitchen Trolleys
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Details</h3>
          <p>
            <strong>Address:</strong>
            <br />
            Flat No. S-212, Shop No. 10, Shri Krushna Nagar, Datir Mala, MIDC
            Ambad, Nashik – 422010, Maharashtra, India
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            +91 9422258307
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            purvikainterio@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom social-icons">
        <p>
          © {new Date().getFullYear()} Purvika Interio. All Rights Reserved.
          Developed by <span>Prajakta Mande</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=100063935296560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/purvika4835"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/company/purvika-interio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://jsdl.in/DT-46U8YHH3QSP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Justdial"
          >
            <img
              src="/images/just-dial.avif"
              alt="Justdial"
              className="justdial-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
