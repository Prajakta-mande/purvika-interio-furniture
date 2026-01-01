import React from "react";
import "./TurnkeySolution.css";
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
        <div className="about-right">
          <p className="div-title">TURNKEY SOLUTION</p>

          <h1>
            Smart Designs Delivered with <span>Precision Execution</span>
          </h1>

          <p className="description">
            <b>Purvika Interio</b> is a leading provider of{" "}
            <b>Turnkey Office Interior Solutions</b> in Nashik, offering a
            streamlined approach to creating professional environments. As
            businesses look for more efficient ways to build out their spaces,
            our turnkey projects have proven to be the most effective and
            cost-efficient choice for offices, retail units, and commercial
            buildings. By choosing a turnkey model, you opt for an integrated
            solution where a single expert contractor manages every aspect of
            the project—from the initial layout to the final furniture
            installation—significantly reducing the stress and complexity for
            the property owner.
          </p>

          <p className="description">
            A major interior design project for a corporate or commercial space
            can often be overwhelming, involving multiple vendors and tight
            schedules. However, Purvika Interio simplifies this journey by
            providing a single point of contact who takes full responsibility
            for the entire workflow. Whether it is civil work, electrical
            installations, flooring, or bespoke modular furniture, our team
            ensures that every detail aligns with the client’s vision. This
            "one-stop-shop" approach ensures accountability and eliminates the
            communication gaps typically found when managing several independent
            contractors.
          </p>

          <p className="description">
            Our bespoke turnkey interior design packages are specifically
            crafted to provide a quick turnaround time without compromising on
            quality. Based in Nashik and serving clients all over India, we
            utilize advanced planning tools and premium materials to ensure that
            every project is delivered within the set timeframe. We understand
            that in the business world, time is money; therefore, our execution
            process is optimized for speed, allowing you to move into your new,
            fully functional workspace as soon as possible.
          </p>
          <p className="description">
            At Purvika Interio, our commitment is to deliver expertly planned
            interiors that remain faithful to your brand identity and functional
            requirements. We combine our expertise in modular office furniture
            with full-scale interior execution to create "Smart & Modern
            Workspaces" that inspire productivity. By trusting us with your
            turnkey project, you are choosing a partner dedicated to precision,
            transparency, and excellence, ensuring that your commercial space is
            ready for business the moment we hand over the keys.
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
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
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
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
          <p className="gallery-caption">Turnkey Office Solution</p>
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
