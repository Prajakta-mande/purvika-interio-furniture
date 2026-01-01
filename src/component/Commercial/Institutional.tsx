import React from "react";
import "./Institutional.css";
import { NavLink } from "react-router-dom";

const Institutional: React.FC = () => {
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
          <p className="div-title">INSTITUTIONAL FURNITURE</p>

          <h1>
            Modern & Ergonomic <span>Learning Spaces</span>
          </h1>

          <p className="description">
            <b>Purvika Interio</b> is a leading name among{" "}
            <b>institutional furniture manufacturers in Nashik</b>, specializing
            in high-quality solutions for schools, colleges, and coaching
            institutes. Our extensive range of products is meticulously designed
            to foster better learning environments, ensuring that every piece of
            furniture—from ergonomic classroom benches to robust laboratory
            desks—is built with a focus on durability and user comfort. By
            combining modern aesthetics with functional design, we ensure that
            our clients’ specifications and expectations are met with the
            highest level of precision.
          </p>

          <p className="description">
            Our team consists of highly skilled professionals who utilize
            advanced manufacturing technology and premium-grade materials to
            maintain a high production capacity. This allows us to handle
            large-scale orders for school and college furniture efficiently,
            ensuring that every item delivered maintains the superior finish and
            structural integrity that Purvika Interio is known for.
          </p>

          <p className="description">
            We believe that the quality of an educational space significantly
            impacts student performance, which is why we follow a rigorous{" "}
            <b>quality control policy</b>. Our manufacturing process is guided
            by ergonomic standards to ensure that students and faculty have the
            support they need throughout the day. By staying updated with global
            design trends, we provide <b>modern educational furniture</b> that
            is not only long-lasting but also adapts to the changing needs of
            21st-century classrooms and administrative offices.
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
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
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
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Institutional Furniture</p>
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

export default Institutional;
