import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h2 className="footer-logo">Purvika Interior</h2>
          <p>
            Purvika Interior is driven by creativity, originality and
            enthusiasm. We specialize in residential & commercial interior
            solutions with quality and elegance.
          </p>
        </div>

        {/* Commercial Design */}
        <div className="footer-col">
          <h3>Commercial Design</h3>
          <ul>
            <li>Modular Office Furniture</li>
            <li>Institutional Furniture</li>
            <li>Chairs</li>
            <li>Chair</li>
            <li>Turnkey Solution</li>
          </ul>
        </div>

        {/* Residential Design */}
        <div className="footer-col">
          <h3>Residential Design</h3>
          <ul>
            <li>Bedroom Interior Design</li>
            <li>Modular Kitchen</li>
            <li>Chairs & Sofas</li>
            <li>Turnkey Solution</li>
          </ul>
        </div>

        {/* Contact */}
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

      {/* Bottom Bar */}
      <div
        className="footer-bottom social-icons"
        style={{ alignItems: "center", gap: "10px" }}
      >
        <div>
          © {new Date().getFullYear()} Purvika Interior. All Rights Reserved.
          Developed by{" "}
          <span style={{ marginRight: "20px" }}>Prajakta Mande</span>
          {/* Social links */}
          <a
            href="https://www.facebook.com/profile.php?id=100063935296560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i
              className="fab fa-facebook-f"
              style={{
                marginRight: "20px",
                fontSize: "large",
                color: "#ff7a18",
              }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/purvikainterio?igsh=YXQ2cXl5NHd6NmYy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i
              className="fab fa-instagram"
              style={{
                marginRight: "20px",
                fontSize: "large",
                color: "#ff7a18",
              }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/company/purvika-interio?trk=blended-typeahead"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <i
              className="fab fa-linkedin"
              style={{
                marginRight: "20px",
                fontSize: "large",
                color: "#ff7a18",
              }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
