// components/Experience.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Experience.css";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get("https://6874d74cdd06792b9c957938.mockapi.io/myprojects/Experiences")
      .then((res) => {
        const sorted = res.data.sort((a, b) => b.id - a.id); // Recent on top
        setExperiences(sorted);
      })
      .catch((err) => console.error("Failed to fetch experiences", err));
  }, []);

  return (
    <section className="experience-section-portfolio" id="experience">
      <h2 className="experience-title-portfolio">
        <span>My</span> Experience
      </h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            className={`experience-card-container ${index % 2 === 0 ? "left" : "right"
              }`}
            key={exp.id}
          >
            <div className="experience-card">
              <h3>{exp.position} – {exp.company}</h3>
              <p className="experience-duration-portfolio">{exp.duration}</p>
              <p className="experience-description-portfolio">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
