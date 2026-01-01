import React from "react";
import "./Chair.css";
import { NavLink } from "react-router-dom";

const Chair: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img
              src="/images/chairSofa/chair5.jpg"
              alt="Modular Office Furniture"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">CHAIR</p>

          <h1>
            Purvika Interio <span>Where Comfort Meets Customization</span>
          </h1>

          <p className="description">
            At Purvika Interio, we understand that a chair is more than just a
            seat—it is the backbone of your daily productivity and physical
            well-being. We specialize in providing a comprehensive range of
            premium office chairs sourced from the world’s leading brands,
            ensuring our clients receive world-class ergonomics at the most
            competitive prices. Whether you are looking for high-performance
            executive seating or functional office solutions, our collection is
            curated to blend superior comfort with professional style, catering
            to the diverse needs of the modern workspace.
          </p>

          <p className="description">
            Beyond our retail range, we take immense pride in our in-house
            manufacturing and testing facilities, where every item is
            meticulously crafted, assembled, and quality-checked by our skilled
            craftsmen. Our specialized "Sofa Div" offers bespoke customization
            services, allowing you to tailor fabrics, designs, and dimensions to
            your exact specifications. From providing expert maintenance and
            repairs to supplying premium chair upholstery, Purvika Interio is
            committed to delivering a perfect blend of ergonomic support and
            aesthetic brilliance for the long-term prosperity of your business.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair1.jpg" alt="chair 1" />
          </div>
          <p className="gallery-caption">Executive Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair2.jpg" alt="chair 2" />
          </div>
          <p className="gallery-caption">Executive Medium Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair5.jpg" alt="chair 3" />
          </div>
          <p className="gallery-caption">Visitor Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair4.jpg" alt="chair 4" />
          </div>
          <p className="gallery-caption">Leather Chairs</p>
        </div>
      </div>
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair1.jpg" alt="chair 1" />
          </div>
          <p className="gallery-caption">Directors Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair2.jpg" alt="chair 2" />
          </div>
          <p className="gallery-caption">Executive Mesh Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair5.jpg" alt="chair 3" />
          </div>
          <p className="gallery-caption">Visitor Chairs</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img src="/images/chairSofa/chair4.jpg" alt="chair 4" />
          </div>
          <p className="gallery-caption">Leather Chairs</p>
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

export default Chair;
