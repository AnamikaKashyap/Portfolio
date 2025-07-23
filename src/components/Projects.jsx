import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case "html":
      return <FaHtml5 color="#e34c26" title="HTML5" />;
    case "css":
      return <FaCss3Alt color="#2965f1" title="CSS3" />;
    case "javascript":
      return <FaJsSquare color="#f0db4f" title="JavaScript" />;
    case "github pages":
      return <FaGithub color="#fff" title="GitHub Pages" />;
    default:
      return <span>{tech}</span>;
  }
}

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

            {/* Tech Stack with Icons */}
            <div className="tech-stack-icons">
              {project.techStack?.map((tech, index) => (
                <div className="tech-icon" key={index}>
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            <div className="button-project">
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                🚀 View Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                🌐 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
