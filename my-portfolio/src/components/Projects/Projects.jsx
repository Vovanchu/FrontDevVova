import React from "react";

import "./Projects.scss";

function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {/* Example project item */}
        <div className="project-item">
          <h3>Project Title</h3>
          <p>Description of the project goes here.</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}


export default Projects;