import React from "react";
import "./Sofa.css";
import { NavLink } from "react-router-dom";
// import type { supportsFlags } from "framer-motion";

const sofa: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img src="/images/chairSofa/sofa4.png" alt="Sofa" loading="lazy" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">SOFA</p>

          <h1>
            Custom Sofas & Lounge Seating{" "}
            <span>Designed for Style, Built for Durability</span>
          </h1>

          <p className="description">
            <b>Purvika Interio</b> is a specialist in crafting premium,
            custom-made sofas designed to elevate the aesthetic of any office,
            commercial, or residential space. Unlike standard seating, we take
            pride in our ability to <b>manufacture and customize sofas</b>{" "}
            according to each client’s specific requirements. From contemporary
            executive lounges to comfortable waiting area seating, our designs
            are built to provide the{" "}
            <b>perfect balance of luxury, durability, and ergonomic support</b>.
          </p>

          <p className="description">
            We understand that every space has a unique character, which is why
            we offer an extensive range of different types of sofa designs,
            including modular sectionals, classic leatherette finishes, and
            modern fabric lounges. Our customization process allows you to
            choose everything from the dimensions and frame structure to the
            specific density of the foam and the texture of the upholstery. This
            bespoke approach ensures that your furniture fits your interior
            layout perfectly while reflecting your brand’s professional
            identity.
          </p>

          <p className="description">
            Quality and craftsmanship are the foundations of our manufacturing
            process. Every sofa is designed in-house and built by skilled
            artisans who pay close attention to structural integrity and fine
            detailing. Beyond manufacturing, we continue to support our clients
            with expert maintenance and repair services to keep your custom
            seating looking and feeling new for years. At Purvika Interio, we
            don’t just deliver furniture; we create personalized seating
            experiences that combine innovation with timeless comfort.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/chairSofa/sofa1.jpg"
              alt="Modern Designer Sofa"
              loading="lazy"
            />
          </div>
          <p className="gallery-caption">office Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa2.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa3.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">clasic Designer Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa5.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
      </div>
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/chairSofa/sofa1.jpg"
              alt="Modern Designer Sofa"
              loading="lazy"
            />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa2.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa3.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/sofa5.jpg" alt="Sofa" loading="lazy" />
          </div>
          <p className="gallery-caption">Modern Designer Sofa</p>
        </div>
      </div>

      <div className="enquire-btn-wrapper">
        <NavLink to="/contact" className="enquire-btn">
          Enquire Now <span>→</span>
        </NavLink>
      </div>
    </section>
  );
};

export default sofa;
