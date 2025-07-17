import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="main-contact-section">
        <h2 className="contact-heading">
          <span>Contact</span> Me
        </h2>

        <p className="contact-text">
          Let's connect! I'm open to freelance projects, full-time roles, or a good tech chat.
        </p>

        <div className="contact-details">
          <p><i className="fas fa-map-marker-alt"></i> Noida, Uttar Pradesh, India</p>
          <p><i className="fas fa-phone-alt"></i> +91 6394642847</p>
          <p><i className="fas fa-envelope"></i> kashyapanamika595@gmail.com</p>
        </div>

        <div className="contact-buttons">
          <a href="mailto:kashyapanamika595@gmail.com" className="btn primary">Email Me</a>
          <a href="https://www.linkedin.com/in/anamika-kashyap-fullstackdeveloper/" target="_blank" rel="noreferrer" className="btn secondary-contact">
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
