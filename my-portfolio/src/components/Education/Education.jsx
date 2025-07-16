import React from "react";

import educationData from "./educationData.js";

import "./Education.scss";

function Education() {
  return (
    <section className="education" id ="education">
      <h2 className="education-title">Education & Certifications</h2>
      <p className="education-subtitle">
        Formal education and programs I’ve completed or am currently pursuing.
      </p>

      <div className="education-list">
        {educationData.map((item) => (
          <div key={item.id} className="education-list-item">
            <div className="education-list-item-header">
              <h3 className="education-list-item-title">{item.title}</h3>
              <span
                className={`education-list-item-status ${
                  item.status === "Completed" ? "completed" : "ongoing"
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="education-list-item-institution">{item.institution}</p>
            <p className="education-list-item-period">{item.period}</p>
            <p className="education-list-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
