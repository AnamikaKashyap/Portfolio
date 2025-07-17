import React, { useEffect, useRef } from "react";
import "./TechStack.css";

function TechStack() {
  const stack = [
    { name: "React", icon: "fab fa-react", color: "#61DBFB" },
    { name: "Redux Toolkit", icon: "fas fa-code-branch", color: "#764ABC" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "#38BDF8" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "GitHub", icon: "fab fa-github", color: "#333" },
    { name: "VS Code", icon: "fas fa-terminal", color: "#007ACC" }
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;

    const interval = setInterval(() => {
      position -= 200; // card width + 20px gap
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
        track.style.transition = "none";
        track.style.transform = `translateX(${position}px)`;
        void track.offsetWidth;
        track.style.transition = "transform 0.6s ease-in-out";
      } else {
        track.style.transition = "transform 0.6s ease-in-out";
        track.style.transform = `translateX(${position}px)`;
      }
    }, 2000); // ⬅️ slower: move every 2 seconds

    return () => clearInterval(interval);
  }, []);


  const fullStack = [...stack, ...stack]; // Duplicate entire array

  return (
    <section className="tech-section" id="tech">
      <h2 className="tech-heading">
        My <span>Tech Stack</span>
      </h2>
      <div className="scroll-wrapper">
        <div className="scroll-track" ref={trackRef}>
          {fullStack.map((tech, i) => (
            <div className="tech-card-inline" key={i}>
              <i className={`${tech.icon} tech-icon`} style={{ color: tech.color }}></i>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
