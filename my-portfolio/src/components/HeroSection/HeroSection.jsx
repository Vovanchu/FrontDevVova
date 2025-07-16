import React from "react";
import "./HeroSection.scss";
import arrowIcon from "../../images/icons/arrow-right.svg";

function HeroSection() {
  return (
    <section className="hero-section hero-section--dark">
      <div className="hero-content">
        <h1 className="hero-content-title">Hi, I'm Vova Nechay.</h1>
        <p className="hero-content-subtitle">
          A passionate Software Engineer crafting exceptional web experiences
          and robust solutions.
        </p>
        <a 
          href="#projects"
          className="hero-content-button">
          Explore My Work{" "}
          <img
            className="hero-content-button-icon"
            loading="lazy"
            src={arrowIcon}
            alt="Arrow Right Corner"
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
