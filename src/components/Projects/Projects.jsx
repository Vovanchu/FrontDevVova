import React from "react";

import projectsData from "./projectsData";

import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of my recent work showcasing diverse skills and impactful
        solutions.
      </p>
      <div className="projects-list">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="projects-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="projects-card-image"
            />

            <h3 className="projects-card-title">{project.title}</h3>

            <p className="projects-card-description">{project.description}</p>

            <div className="projects-card-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="projects-card-tag">
                  {tag}
                </span>
              ))}
            </div>

            <span className="projects-card-link">View Website</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
