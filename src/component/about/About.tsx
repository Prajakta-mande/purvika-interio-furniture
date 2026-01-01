// import React from "react";
import "./about.css";
import Client from "./client";
import Testimonial from "./Testimonial";
import CertificationSlider from "./CertificationSlider";

const About = () => {
  return (
    <>
      {/* ==================== About Section ==================== */}
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
              A Efficient Modular Office & <span>Institutional Furniture</span>
            </h1>

            <p className="description">
              Innovative, fashionable, designer, durable, and affordable
              furniture manufacturing is at the core of <b>Purvika Interio.</b>{" "}
              We strongly believe in integrating ergonomic design into furniture
              to maximize space utilization, comfort, and functionality. With a
              deep understanding of modern ergonomics, Purvika Interio has
              emerged as one of the{" "}
              <b>
                leading modular furniture manufacturers in Nashik. Since 2017,
              </b>
              we have been working diligently to fulfill the furniture
              manufacturing requirements of individual clients, corporate
              organizations, and various government agencies. Over the years,
              Purvika Interio has earned a strong reputation in Nashik for
              delivering projects within defined timelines through a persistent,
              trustworthy, and cost-effective approach—ensuring complete client
              satisfaction.{" "}
              <b>Founded by entrepreneur Mr. Sandesh A. Pisolkar,</b> Purvika
              Interio is backed by over 15+ years of industry experience. His
              expertise has helped numerous organizations develop, design, and
              successfully set up their own furniture manufacturing units,
              contributing significantly to quality and innovation in the
              industry. We are pleased to offer a comprehensive range of
              furniture solutions, including Modular Office Furniture, Home
              Furniture, Modular Kitchens, and Institutional Furniture. Our
              product portfolio covers{" "}
              <b>
                school benches, bunk beds, TV units, wardrobes, hostel
                furniture, all types of office tables, dining tables, wooden
                chairs, sofas, cupboards, mattresses, shoe racks, wall mirrors,
                pin-up boards, green boards, key holders, wooden lockers, side
                returns, revolving chairs (MS-SS), file cabinets, and complete
                office and hostel furniture solutions.
              </b>
            </p>
          </div>
        </div>
      </section>
      {/* ==================== End About Section ==================== */}

      {/* ******************** our vision and our mission section********** */}
      <section className="vm-hero-section">
        {/* Background with Overlay */}
        <div className="vm-hero-bg"></div>

        {/* Cards Overlay */}
        <div className="vm-overlay">
          <div className="vm-container">
            {/* Vision */}
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p className="description">
                To become a leading Indian furniture manufacturer by delivering
                innovative, high-quality, and value-driven products with
                superior craftsmanship and customer-centric excellence.
              </p>
            </div>

            {/* Mission */}
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>
                To create value for our customers through reliable, flexible,
                and quality-driven furniture solutions focused on durability and
                ergonomic design.
              </p>
            </div>

            {/* Values */}
            <div className="vm-card">
              <div className="vm-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h2>Our Values</h2>
              <p className="description">
                Quality, innovation, transparency, and trust guide everything we
                do, enabling us to build long-lasting customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* *************end of our vission and our mission********************** */}

      {/* *************our client********************** */}
      <Client />
      {/* *************end of our client********************** */}

      {/* *************Testimonial********************** */}
      <Testimonial />
      {/* *************end of Testimonial********************** */}

      {/* *************CertificationSlider********************** */}
      <CertificationSlider />
      {/* *************end of CertificationSlider********************** */}
    </>
  );
};

export default About;
