import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-heading">
          About <span>Me</span>
        </h2>
        <p className="about-intro">
          Hi! I'm <strong>Anamika Kashyap</strong>, a passionate and performance-driven frontend developer based in Noida, India.
          I specialize in building complete frontend applications — not just designing user interfaces, but also managing logic, state, and API communication.
        </p>
        <p className="about-details">
          My core stack includes <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. I use Redux Toolkit for scalable and maintainable state management, including async data fetching using <code>createAsyncThunk</code> and slices.
          I integrate REST APIs and build dynamic, real-world UIs that are both performant and responsive.
        </p>
        <p className="about-extra">
          Whether working in teams or independently, I focus on clean code, component-based architecture, and delivering smooth user experiences.
          I'm open to full-time roles or freelance opportunities where I can contribute to impactful web products and continue growing as a frontend engineer.
        </p>
      </div>
    </section>
  );
}

export default About;
