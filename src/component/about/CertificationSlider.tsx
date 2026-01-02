import React, { useState, useEffect } from "react";
import "./CertificationSlider.css";

const certificates = [
  "/images/certificates/cert1.jpg",
  "/images/certificates/cert2.jpg",
  "/images/certificates/cert3.jpg",
  "/images/certificates/cert4.jpg",
  "/images/certificates/cert5.jpg",
  "/images/certificates/cert6.jpg",
];

const CertificationSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  return (
    <section className="certification-section">
      <div className="div-right">
        <p className="div-title">OUR CERTIFICATIONS</p>
        <h1>
          Certified Quality & <span>Trusted Manufacturing</span>
        </h1>

        <div className="cert-slider">
          <button className="cert-arrow left" onClick={prevSlide}>
            ❮
          </button>

          <div className="cert-image-wrapper">
            <img
              src={certificates[current]}
              alt="Purvika Interio Certification"
            />
          </div>

          <button className="cert-arrow right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationSlider;
