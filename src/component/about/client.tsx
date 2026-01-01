import React from "react";
import "./client.css";

const Client: React.FC = () => {
  return (
    <section className="clients-section">
      <h2 className="div-title"> OUR VALUABLE CLIENTS</h2>

      <div className="clients-slider">
        <div className="clients-track">
          <div className="client-card">
            <img src="/images/clients/tata.jpg" alt="Tata Projects" />
          </div>

          <div className="client-card">
            <img src="/images/clients/mahindra.png" alt="Mahindra" />
          </div>

          <div className="client-card">
            <img src="/images/clients/sahyadri.png" alt="Sahyadri Hospital" />
          </div>

          <div className="client-card">
            <img src="/images/clients/shapoorji.png" alt="Shapoorji Pallonji" />
          </div>

          <div className="client-card">
            <img src="/images/clients/kec.png" alt="KEC International" />
          </div>

          <div className="client-card">
            <img src="/images/clients/vadani.jpg" alt="Vadani Interiors" />
          </div>

          {/* Duplicate for infinite scroll */}
          <div className="client-card">
            <img src="/images/clients/tata.jpg" alt="Tata Projects" />
          </div>

          <div className="client-card">
            <img src="/images/clients/mahindra.png" alt="Mahindra" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
