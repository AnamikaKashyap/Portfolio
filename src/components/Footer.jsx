import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-connect">
        <h2>
          Let’s <span>Connect</span>
        </h2>
        <p className="footer-text">
          Open to collaborations, frontend gigs, or just a good tech talk — feel free to reach out!
        </p>
        <div className="connect-buttons">
          <a href="mailto:kashyapanamika595@gmail.com" className="btn">Email Me</a>
          <a href="https://www.linkedin.com/in/anamika-kashyap-fullstackdeveloper/" target="_blank" rel="noreferrer" className="btn secondary">
            LinkedIn
          </a>
        </div>
      </div>


      <div className="footer-content">
        {/* About Me Section */}
        <div className="footer-section about">
          <h3>Anamika Kashyap</h3>
          <p>
            Passionate frontend developer crafting responsive, elegant, and performance-optimized UIs using React, JavaScript, Redux Toolkit and Tailwind CSS.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/anamika-kashyap-fullstackdeveloper/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AnamikaKashyap" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/anamikakash" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/aanamika_ksp/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>


        </div>

        {/* Useful Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/anamika-kashyap-fullstackdeveloper/" target="_blank" className="social" rel="">LinkedIn</a></li>
            <li><a href="https://github.com/AnamikaKashyap" target="_blank" className="social" rel="">Github</a></li>
            <li><a href="https://www.instagram.com/aanamika_ksp/" className="social" target="_blank" rel="">Instagram</a></li>
            <li><a href="#contact" className="social">Facebook</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>More Info</h4>
          <p>Noida, Uttar Pradesh, India</p>
          <p>Native Place - Lucknow, Uttar Pradesh, India</p>
          <p>📞 +91 6394642847</p>
          <p>📧 kashyapanamika595@gmail.com</p>
        </div>
      </div>

      <hr />
      <p className="copyright">
        © 2025 Anamika Kashyap. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
