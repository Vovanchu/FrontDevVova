import React from "react";

import educationData from "./educationData.js";

import "./Education.scss";

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education & Certifications</h2>
      <p className="education-subtitle">
        Formal education and programs I’ve completed or am currently pursuing.
      </p>

      <div className="education-list">
        {educationData.map((item) => (
          <div key={item.id} className="education-item">
            <div className="education-header">
              <h3 className="education-item-title">{item.title}</h3>
              <span
                className={`education-status ${
                  item.status === "Completed" ? "completed" : "ongoing"
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="education-institution">{item.institution}</p>
            <p className="education-period">{item.period}</p>
            <p className="education-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
