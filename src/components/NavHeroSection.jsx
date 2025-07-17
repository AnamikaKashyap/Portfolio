import React, { useState } from "react";
import anamikaImg from "../assets/anamika.jpeg";
import "./NavHeroSection.css";

function NavHeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-hero-section">
      <div className="overlay">
        <header className="navbar">
          <h1 className="logo">Anamika Kashyap</h1>

          {/* Hamburger icon */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
            <ul>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
              <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#tech" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img src={anamikaImg} alt="Anamika Kashyap" className="hero-img" />
              </div>
              <div className="back">
                <p className="back-text">
                  Hi! I'm Anamika 👩‍💻
                  <br />
                  A Software Engineer
                </p>
              </div>
            </div>
          </div>

          <h2 className="role">Frontend Developer / UI Developer / React Developer</h2>
          <p className="description">
            I am a passionate React developer who loves building responsive and dynamic web applications.
            With strong knowledge of modern web technologies, I bring UI ideas to life.
          </p>
        </section>

        <a
          href="https://drive.google.com/file/d/1qHEK1ahJP5LPbzV85DoDw9leZKMV-W9i/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-btn">
            <i className="fas fa-download"></i> Download My Resume
          </button>
        </a>

      </div>
    </div>
  );
}

export default NavHeroSection;
