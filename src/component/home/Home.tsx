import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
//import { motion } from "framer-motion";
import Gallery from "../gallery/Gallery";
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

const Home: React.FC = () => {
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
    <div className="home">
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
              <div>
                <h1 className="div-title">{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
              </div>
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
      {/************************  About ********************8 */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT SIDE */}
          <div className="about-left">
            <div className="image-wrapper imghover">
              <img src="/images/office.jpg" alt="Office Furniture" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="div-right">
            <p className="div-title">ABOUT PURVIKA INTERIO</p>

            <h1>
              A Efficient Modular Office &<span> Institutional Furniture</span>
            </h1>

            <p className="description">
              <b>Purvika Interio</b> is one of the leading modular furniture
              <b>manufacturers in Nashik</b>, delivering innovative, ergonomic,
              stylish, and affordable furniture solutions since 2017. We
              specialize in custom furniture manufacturing designed to maximize
              space, comfort, and functionality for{" "}
              <b>
                homes, offices, institutions, corporates, and government
                organizations
              </b>
              . Our expertise includes modular office furniture, home furniture,
              modular kitchens, and institutional furniture.{" "}
              <b>
                From wardrobes, workstations, office tables, sofas, beds, TV
                units, and dining furniture to school and hostel furniture
              </b>
              , we offer complete end-to-end furniture solutions. Known for our
              on-time project delivery, cost-effective pricing, and
              customer-centric approach, Purvika Interio has earned a strong
              reputation as a trusted furniture manufacturer in Nashik. Driven
              by creativity, originality, and quality craftsmanship, we create
              functional, durable, and aesthetically pleasing spaces tailored to
              client needs.
            </p>

            <p className="description">
              We are driven by creativity, originality and enthusiasm. We
              deliver luxurious, creative and beautiful spaces that directly
              respond to our client needs.
            </p>

            {/* <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              To become a leading Indian furniture manufacturer by delivering innovative, high-quality, and value-driven products. Our vision reflects our commitment to the future—continuously inspiring us to provide best-in-class solutions with exceptional value for money. From design to delivery, we strive to set industry benchmarks through superior craftsmanship, dependable service, and customer-centric excellence.
We aspire for our customers to experience warmth, comfort, respect, and trust in every interaction with Purvika Interio.

            </p>
          </div> */}
          </div>
        </div>
      </section>{" "}
      {/* end of about section*/}
      {/* ***************** vission section ********* */}
      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="vision-overlay"></div>

        <div className="vision-container">
          {/* LEFT SIDE */}
          <div className="vision-left">
            <div className="founder-card">
              <img
                src="/images/founder.jpg"
                alt="Founder"
                className="founder-img"
              />
              <h3>Sandesh A. Pisalkar</h3>
              <p style={{ color: "white" }}>Founder & Entrepreneur</p>
              <div className="vision-box">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "justify",
                  }}
                >
                  <b>Mr. Sandesh A. Pisolkar</b>, Founder of Purvika Interio, is
                  a seasoned entrepreneur with 15+ years of experience in the
                  furniture manufacturing industry. His deep understanding of
                  furniture design, production, and ergonomic solutions has
                  enabled him to successfully support and establish multiple
                  furniture manufacturing units over the years. With a strong
                  vision for quality, innovation, and customer satisfaction, Mr.
                  Pisolkar leads Purvika Interio with a hands-on approach,
                  ensuring every project meets the highest standards of design,
                  durability, and functionality. His expertise and leadership
                  continue to drive the company’s growth as a reliable modular
                  furniture brand in Nashik.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="vision-right">
            <div className="vision-box">
              <p className="div-title">OUR VISION</p>
              <p>
                To become a leading Indian furniture manufacturer by delivering
                innovative, high-quality, and value-driven products. From design
                to delivery, we strive for superior craftsmanship, dependable
                service, and customer-centric excellence.
              </p>
            </div>

            <div className="mission-box">
              <p className="div-title">OUR MISSION</p>
              <p>
                To create value for our customers through reliability,
                flexibility, trust, and excellence while maintaining long-term
                relationships and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* *****************  end ofvission section ********* */}
      {/* ************************ Gallery Section************ */}
      <Gallery />
      {/* ************************ End of Gallery Section************ */}
    </div>
  );
};

export default Home;
