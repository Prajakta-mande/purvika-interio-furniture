import React from "react";
import "./Bedroom.css";
import { NavLink } from "react-router-dom";

const Bedroom: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img
              src="/images/residential/bedroom1.png"
              alt="Bedroom Furniture"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">BEDROOM INTERIOR DESIGN</p>

          <h1>
            Your Dream Bedroom,<span>Customized for You</span>
          </h1>

          <p className="description">
            <b>Smart Solutions for Your Private Space.</b> In today’s urban
            homes, maximizing space without compromising on style is essential.{" "}
            <b>Purvika Interio</b> is a trusted name in{" "}
            <b>customized bedroom furniture</b> in Nashik, known for
            transforming compact spaces into highly functional and beautiful
            rooms. We understand the evolving needs of Indian households and
            provide innovative furniture solutions that cater to both aesthetics
            and utility, serving homeowners from Nashik to every corner of
            India.
          </p>

          <p className="description">
            <b>The Ultimate in Space-Saving & Comfort.</b> Our expertise lies in
            creating space-saving bedroom furniture that works for you. We
            manufacture a wide variety of <b>foldable beds (Murphy beds)</b>,
            wall-mounted units, and <b>modular wardrobes</b> that offer maximum
            storage in a minimal footprint. Our premium product line includes{" "}
            <b>beds with hydraulic storage</b>,{" "}
            <b>
              bedside tables, vanity dressing units, and customized walk-in
              closets.
            </b>{" "}
            By replacing bulky, traditional furniture with our sleek, modular
            designs, we help you create an organized, breathable, and
            clutter-free bedroom environment.
          </p>

          <p className="description">
            <b>Quality You Can Trust.</b> As direct manufacturers, Purvika
            Interio is committed to using premium, long-lasting materials. Our
            bedroom furniture is <b>termite-resistant, moisture-proof,</b> and
            features a superior, scratch-resistant finish that ensures it looks
            brand new for years to come. Utilizing advanced technology and
            skilled craftsmanship, we ensure every wardrobe hinge, drawer
            system, and bed frame undergoes a strict quality check for smooth
            operation and structural strength. We provide a perfect blend of
            durability and sophisticated design for homes nationwide.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom2.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom3.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom4.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom5.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
      </div>

      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom6.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom1.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom2.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/bedroom3.png"
              alt="Bedroom Furniture"
            />
          </div>
          <p className="gallery-caption">Bedroom Furniture</p>
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

export default Bedroom;
