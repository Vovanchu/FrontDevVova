import React from "react";

import "./AboutMe.scss";
import myPhoto from "../../images/my_photo.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-subtitle">
        A brief introduction to my journey and passion.
      </p>
      <div className="about-me-content">
        <div className="about-me-content-texts">
          <p className="about-me-content-text">
            My name is Nechai Volodymyr Andriyovych, and I am a passionate and
            aspiring Full Stack Developer with a strong foundation in both
            theory and practice. Currently, I am pursuing my degree in Computer
            Engineering at university, where I am constantly deepening my
            understanding of how technology shapes the world around us. My
            journey into software development began with a simple curiosity
            about how things work behind the screen — and quickly evolved into a
            deep commitment to creating meaningful, user-centric digital
            experiences.
          </p>

          <p className="about-me-content-text">
            Along the way, I have completed intensive Frontend Development
            courses on platforms like Udemy and GoIT, which have equipped me
            with hands-on skills in HTML, CSS, JavaScript, and modern frameworks
            like React. Currently, I am advancing my skills through a Full Stack
            Developer program at MateAcademy, where I’m learning to build
            scalable applications from the ground up — combining backend logic
            with powerful frontend design.
          </p>

          <p className="about-me-content-text">
            I’m someone who takes pride in writing clean, efficient, and
            maintainable code. Whether I’m working on structuring a complex
            backend system or designing an intuitive and responsive user
            interface, I always aim to deliver high-quality work with attention
            to detail. I believe that great software is not just about how well
            it works, but also about how well it serves and delights its users.
          </p>

          <p className="about-me-content-text">
            Beyond coding, I am a lifelong learner. I’m deeply interested in
            exploring new technologies, development methodologies, and creative
            approaches to problem-solving. I love being part of a community
            that’s constantly evolving, and I strive to stay at the cutting edge
            of the tech landscape — not just to keep up, but to contribute and
            grow within it.
          </p>

          <p className="about-me-content-text">
            My ultimate goal is to create digital products that are not only
            functional and efficient, but also impactful and enjoyable to use. I
            am excited to continue building, learning, and collaborating with
            others who share the same drive for excellence and innovation.
          </p>
        </div>

        <img className="about-me-content-image" src={myPhoto} alt="My Photo" />
      </div>
    </section>
  );
}

export default AboutMe;
