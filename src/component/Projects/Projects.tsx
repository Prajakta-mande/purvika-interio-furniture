import React, { useEffect, useState, useRef } from "react";
import "./projects.css";
import { NavLink } from "react-router-dom";
const slides = [
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    title: "Office Turnkey Solution",
    subtitle: "Smart & modern office furniture solutions",
  },
  {
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    title: "Luxury Home Furniture",
    subtitle: "Comfort that defines your lifestyle",
  },
  {
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d90",
    title: "Residential Design",
    subtitle: "Elegant interiors made for living",
  },
];
const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right

    touchStartX.current = null;
  };
  return (
    <div>
      {/* Slider Section */}
      <section
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Arrow Buttons */}
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </section>
      {/* **************Projects***************** */}
      <section>
        {/* ===== SHOWCASE GALLERY ===== */}
        {/* ===== SHOWCASE GALLERY ===== */}
        <div className="office-gallery">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office1.jpg"
              alt="Office Furniture 1"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
        </div>
        <div className="office-gallery">
          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office1.jpg"
              alt="Office Furniture 1"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office2.jpg"
              alt="Office Furniture 2"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office3.jpg"
              alt="Office Furniture 3"
            />
          </div>

          <div className="gallery-item imghover">
            <img
              src="/images/OfficeFurniture/office4.jpg"
              alt="Office Furniture 4"
            />
          </div>
        </div>
      </section>
      <div className="enquire-btn-wrapper">
        <NavLink to="/contact" className="enquire-btn">
          Enquire Now <span>→</span>
        </NavLink>
      </div>
      {/* ****************** end of projects************ */}
    </div>
  );
};

export default Projects;
