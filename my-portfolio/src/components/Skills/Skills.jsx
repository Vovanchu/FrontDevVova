import React from "react";
import skillsData from "./skillsData";

import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-description">
        Technologies and tools I work with to bring ideas to life.
      </p>
      <div className="skills-list">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skills-item">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skills-item-icon"
            />
              <h3 className="skills-item-title">{skill.name}</h3>
              <p className="skills-item-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
