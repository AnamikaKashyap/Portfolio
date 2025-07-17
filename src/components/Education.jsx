import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-heading">
          My <span>Education</span>
        </h2>

        <div className="education-boxes">
          <div className="education-item">
            <h3>10th – High School</h3>
            <p><strong>St. Joseph Inter College</strong>, ICSE Board</p>
            <p>Stream: Mathematics</p>
          </div>

          <div className="education-item">
            <h3>12th – Intermediate</h3>
            <p><strong>St. Joseph Inter College</strong>, ISC Board</p>
            <p>Stream: Computer Science</p>
          </div>

          <div className="education-item">
            <h3>B.Tech – Computer Science & Engineering</h3>
            <p><strong>Ambalika Institute of Management and Technology</strong></p>
            <p>Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
