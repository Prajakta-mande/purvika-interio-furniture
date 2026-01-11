import React, { useEffect, useState } from "react";
import "./Gallery.css";
// import { style } from "framer-motion/client";

const galleryImages = [
  "/images/residential/bedroom13.jpeg",
  "images/residential/kitchen12.jpg",
  "images/residential/kitchen10.jpg",
  "/images/residential/bedroom13.jpeg",
  "/images/residential/livingroom8.jpg",
];

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  /* 🔁 Auto slide every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* LEFT : IMAGE GALLERY */}
        <div className="div-left">
          <div className="gallery-slider">
            <img
              src={galleryImages[currentImage]}
              alt="Furniture Gallery"
              className="gallery-main-img"
            />

            <button className="nav-btn left" onClick={prevImage}>
              ❮
            </button>
            <button className="nav-btn right" onClick={nextImage}>
              ❯
            </button>
          </div>

          <div className="gallery-thumbs">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`thumb ${index === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* RIGHT : WHY CHOOSE US */}
        <div className="div-right">
          <p className="div-title">WHY CHOOSE US</p>
          <h1>
            A RELIABLE MODULAR FURNITURE MANUFACTURER <br />
            <span>FOR HOME & COMMERCIAL SPACES </span>
          </h1>
          <p className="description">
            We are a leading{" "}
            <b>furniture manufacturer and interior solutions provider,</b>{" "}
            specializing in{" "}
            <b>
              modular home furniture, kitchen trolleys, residential interiors,
              commercial and industrial furniture solutions.
            </b>
            Our designs seamlessly blend aesthetics, durability, and
            functionality, creating spaces that are both practical and visually
            appealing. From <b>custom-made home interiors</b> to{" "}
            <b>arge-scale industrial and office furniture manufacturing</b>, we
            deliver solutions tailored to diverse needs.
          </p>

          <ul style={{ listStyleType: "none" }}>
            <li>
              <span className="theamColor">✔</span> Premium Quality Materials
            </li>
            <li>
              <span className="theamColor">✔</span> Customized Furniture
              Solutions
            </li>
            <li>
              <span className="theamColor">✔</span> Experienced Craftsmanship
            </li>
            <li>
              <span className="theamColor">✔</span> On-Time Project Delivery
            </li>
            <li>
              <span className="theamColor">✔</span> Trusted by 100+ Clients
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
