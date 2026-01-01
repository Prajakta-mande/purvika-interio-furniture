import React from "react";
import "./LivingRoom.css";
import { NavLink } from "react-router-dom";

const LivingRoom: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img
              src="/images/residential/livingroom3.png"
              alt="Modular Office Furniture"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">LIVING ROOM FURNITURE</p>

          <h1>
            Crafting the Heart of<span> Your Home</span>
          </h1>

          <p className="description">
            <b>The Heart of Your Home</b>, Tailored to You Your living room is
            the heart of your home—a place for relaxation, family gatherings,
            and making lasting impressions. At <b>Purvika Interio</b>, we
            believe your home should tell your story. As a premier{" "}
            <b>living room furniture manufacturer based in Nashik</b>, we
            specialize in crafting bespoke furniture solutions that blend luxury
            with functionality. Serving homeowners across India, we design
            customized living room interiors that reflect your personal style
            while maximizing comfort and space efficiency.
          </p>

          <p className="description">
            <b>Expert Craftsmanship & Versatile Designs</b> Our extensive range
            of premium products includes everything from sleek{" "}
            <b>modular TV units</b>
            and plush <b>sofa sets</b> to <b>designer coffee tables</b>,{" "}
            <b>elegant shoe racks, and decorative wall units</b>. We also
            specialize in functional accents like{" "}
            <b>crockery units and foyer consoles</b>. As direct manufacturers,
            we use high-quality, termite-resistant, and water-resistant
            materials to ensure every piece stands the test of time. From
            initial concept to final installation, Purvika Interio provides
            end-to-end solutions for clients in Nashik and throughout India,
            delivering precision craftsmanship and a flawless finish.Expert
            Craftsmanship & Versatile Designs Our extensive range of premium
            products includes everything from sleek modular TV units and plush
            sofa sets to designer coffee tables, elegant shoe racks, and
            decorative wall units. We also specialize in functional accents like
            crockery units and foyer consoles. As direct manufacturers, we use
            high-quality, termite-resistant, and water-resistant materials to
            ensure every piece stands the test of time. From initial concept to
            final installation, Purvika Interio provides end-to-end solutions
            for clients in Nashik and throughout India, delivering precision
            craftsmanship and a flawless finish.
          </p>

          <p className="description">
            <b>Unmatched Quality for Long-Term Performance</b> Quality and
            durability are the hallmarks of Purvika Interio. Utilizing advanced
            machinery and premium materials, our products are{" "}
            <b>scratch-resistant</b>,<b>moisture-proof</b>, and built for daily
            use. Whether you prefer a minimalist modern look or a rich, classic
            aesthetic, our team works closely with you to match your interior
            theme perfectly. Based in Nashik and providing{" "}
            <b>pan-India delivery and installation</b>, we are your trusted
            partner in creating a living space that defines luxury, comfort, and
            relaxation.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom3.png"
              alt="Office Furniture 1"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/LivingRoom1.png"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom4.png"
              alt="Office Furniture tt"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom3.png"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
      </div>

      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom4.png"
              alt="Office Furniture 1"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom5.png"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom6.png"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/livingroom3.png"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Livingroom Furniture</p>
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

export default LivingRoom;
