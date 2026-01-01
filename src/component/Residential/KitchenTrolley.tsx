import React from "react";
import "./KitchenTrolley.css";
import { NavLink } from "react-router-dom";

const KitchenTrolley: React.FC = () => {
  return (
    <section className="about-section">
      {/* ===== TOP SECTION ===== */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="image-wrapper imghover">
            <img
              src="/images/residential/kitchen1.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="div-right">
          <p className="div-title">MODULAR KITCHEN</p>

          <h1>
            Transform Your <span>Cooking Experience</span>
          </h1>

          <p className="description">
            <b>The Secret to an Organized & Happy Home.</b> A well-organized
            kitchen is the secret to a happy home. Purvika Interio is a{" "}
            <b>premier modular kitchen manufacturer</b> in Nashik, dedicated to
            bringing world-class kitchen designs to Indian homes. We understand
            that every cook has a unique style, which is why we offer{" "}
            <b>fully customized kitchen furniture</b> that balances sleek
            aesthetics with extreme practicality. From compact city apartments
            to luxury villas, we provide expert kitchen solutions across India,
            ensuring your cooking space is both a visual delight and a
            functional powerhouse.
          </p>

          <p className="description">
            <b>Advanced Kitchen Trolleys & Smart Storage</b> Our expertise lies
            in high-quality <b>stainless steel (SS)</b>kitchen trolleys and
            modular storage systems that maximize every inch of your cabinetry.
            We offer a wide range of customized solutions, including{" "}
            <b>
              pull-out baskets, cutlery organizers, grain drawers, bottle
              pull-outs, and corner units (Magic Corners)
            </b>{" "}
            to utilize dead space effectively. Our kitchen trolleys are designed
            with <b>soft-close telescopic channels</b> and heavy-duty hinges for
            silent and effortless movement. Whether you need a straight,
            L-shaped, or U-shaped kitchen, our customized kitchen furniture
            provides a dedicated place for every utensil and spice jar.
          </p>

          <p className="description">
            <b>Precision Engineering & Built-to-Last Quality.</b> At Purvika
            Interio, we understand that kitchen furniture must withstand heat,
            steam, and heavy usage. That is why we use{" "}
            <b>BWP (Boiling Water Proof) plywood</b>
            and high-grade stainless steel that is{" "}
            <b>rust-proof, termite-resistant, and easy to clean</b>. Our
            finishes—ranging from
            <b>high-gloss acrylic to matte laminates</b>—are scratch-resistant
            and maintain their shine for years. As direct manufacturers, we
            offer end-to-end services from site measurement to{" "}
            <b>pan-India installation,</b>
            ensuring that your modular kitchen is a perfect blend of durability,
            precision craftsmanship, and modern aesthetics.
          </p>
        </div>
      </div>

      {/* ===== SHOWCASE GALLERY ===== */}
      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen2.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen3.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen4.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen5.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
      </div>

      <div className="office-gallery">
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen6.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen1.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen2.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
        </div>
        <div className="gallery-card">
          <div className="gallery-item imghover">
            <img
              src="/images/residential/kitchen3.png"
              alt="kitchen Trolley Furniture"
            />
          </div>
          <p className="gallery-caption">Moduler Kitchen</p>
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

export default KitchenTrolley;
