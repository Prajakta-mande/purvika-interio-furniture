import { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    message: "Excellent quality furniture and timely delivery.",
    name: "Ravi K.",
    location: "Nashik",
    rating: 5,
  },
  {
    message: "Professional team with ergonomic designs.",
    name: "Anita S.",
    location: "Pune",
    rating: 4,
  },
  {
    message: "Best modular furniture manufacturer in Nashik.",
    name: "Sandeep M.",
    location: "Mumbai",
    rating: 5,
  },
  {
    message: "Very reliable for institutional furniture projects.",
    name: "Kiran P.",
    location: "Aurangabad",
    rating: 4,
  },
  {
    message: "Quality craftsmanship and great support.",
    name: "Neha R.",
    location: "Nagpur",
    rating: 5,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="testimonial-bg">
      <div className="testimonial-overlay"></div>

      <div className="testimonial-wrapper">
        <h2 className="div-title">WHAT OUR CLIENTS SAY</h2>

        <div className="testimonial-card glass">
          <div className="quote-dot"></div>

          <p className="testimonial-text">“{testimonials[index].message}”</p>

          <div className="stars">
            {Array.from({ length: testimonials[index].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <h4>{testimonials[index].name}</h4>
          <span className="location">{testimonials[index].location}</span>

          {/* ARROWS */}
          <button className="nav left" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav right" onClick={nextSlide}>
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
