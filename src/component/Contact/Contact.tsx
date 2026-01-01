import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_45vzadm", // ✅ Your Service ID
        "template_ouo0l79", // ✅ Your Template ID
        e.currentTarget, // form element
        "HmQlrrFskVvruCIWG" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);

          // ✅ Proper form reset after React update
          setTimeout(() => {
            formRef.current?.reset();
          }, 0);
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT : CONTACT DETAILS */}
        <div className="contact-left">
          <p className="div-title">PURVIKA INTERIO</p>
          <h2 className="contact-title">CONTACT DETAILS</h2>

          <p className="description">
            If you would like to get in touch with <b>Purvika Interio</b>, feel
            free to reach us using the details below.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Factory Address</h4>
                <p>
                  Flat No. S-212, Shop No. 10, Shri Krushna Nagar, Datir Mala,
                  MIDC Ambad, Nashik – 422010, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Showroom Address</h4>
                <p>
                  PURVIKA INTERIO OPC Pvt Ltd Shop no 2/3, Vishwas Co Sco, Pethe
                  Nagar Rd, Charwak Chowk, Jakhadi Nagar, Indira Nagar, Nashik,
                  Maharashtra 422009
                </p>
              </div>
            </div>
            <div className="info-item">
              <span>📞</span>
              <div>
                <h4>Mobile Number</h4>
                <p>+91 9422258307</p>
              </div>
            </div>

            <div className="info-item">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <p>purvikainterio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT : CONTACT FORM */}
        <div className="contact-right">
          <p className="div-title">DROP US A LINE</p>
          <h2 className="contact-title">SEND YOUR MESSAGE</h2>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />

              <input type="text" name="phone" placeholder="Phone" required />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Your Message <span>→</span>
                </>
              )}
            </button>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <p className="form-success">✅ Message sent successfully!</p>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <p className="form-error">
                ❌ Failed to send message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <iframe
          title="Purvika Interio Location"
          src="https://www.google.com/maps?q=Purvika+Interio+Pethe+Nagar+Road+Indira+Nagar+Nashik+422009&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
