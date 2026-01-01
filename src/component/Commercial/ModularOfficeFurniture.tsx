import React from "react";
import "./ModularOfficeFurniture.css";
import { NavLink } from "react-router-dom";

const ModularOfficeFurniture: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img
              src="/images/OfficeFurniture/office1.jpg"
              alt="Modular Office Furniture"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">MODULAR OFFICE FURNITURE</p>

          <h1>
            Smart & Modern <span>Workspaces</span>
          </h1>

          <p className="description">
            Modern offices demand more than just furniture—they require smart,
            flexible, and efficient workspace solutions.
            <b>Purvika Interio</b>, a trusted{" "}
            <b>modular office furniture manufacturer based in Nashik</b>,
            designs and delivers premium office furniture solutions for
            businesses ,<b>across India</b>. Our approach focuses on creating
            workspaces that enhance productivity while maintaining a
            professional and modern aesthetic.
          </p>

          <p className="description">
            <b>modular office furniture</b> is designed to optimize available
            space, reduce clutter, and support smooth daily operations. By
            replacing rigid cabins with flexible workstations and collaborative
            areas, we help create work-friendly environments that encourage
            efficiency and teamwork.
          </p>

          <p className="description">
            We offer a wide range of <b>customized modular office solutions</b>,
            including office workstations, desks, conference room furniture,
            storage units, and collaborative seating. Manufactured using{" "}
            <b>
              high-quality materials, advanced technology, and precision
              craftsmanship
            </b>
            , our furniture is known for its durability, fine finish, termite
            and rust resistance, water resistance, and minimal maintenance.
            Every product is thoroughly quality-checked before delivery.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office1.jpg"
              alt="Office Furniture 1"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
      </div>

      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office1.jpg"
              alt="Office Furniture 1"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Modular Office Furniture</p>
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

export default ModularOfficeFurniture;
