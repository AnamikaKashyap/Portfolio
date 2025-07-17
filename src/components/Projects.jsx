// components/Projects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://6874d74cdd06792b9c957938.mockapi.io/PortfolioProjects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="projects-section-portfolio" id="projects">
      <h2 className="projects-title-portfolio">
        <span>My</span> Projects
      </h2>

      <div className="projects-list-portfolio">
        {projects.map((project) => (
          <div className="project-card-portfolio" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="button-project">
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                View Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                View Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
