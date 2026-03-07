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
            My name is Nechai Volodymyr Andriyovych, and I am a motivated
            Frontend Developer with strong theoretical knowledge and practical
            experience in building modern web applications. I work confidently
            with HTML5, CSS3, JavaScript (ES6+), TypeScript, and React, which
            allows me to create responsive, interactive, and high-performance
            user interfaces focused on usability and clean architecture.
          </p>

          <p className="about-me-content-text">
            Currently, I am completing an intensive Full Stack Developer program
            at Mate Academy, where I am expanding my expertise in both frontend
            and backend development. On the frontend side, I actively work with
            React, TypeScript, Redux Toolkit for scalable state management, and
            Tailwind CSS for efficient styling. I also use React Hook Form
            together with Zod for reliable and type-safe form validation, and
            have experience building accessible and consistent interfaces using
            ShadCN UI components.
          </p>

          <p className="about-me-content-text">
            Alongside frontend development, I gain practical experience with
            backend technologies such as Node.js, Express, PostgreSQL, and
            MongoDB. This allows me to understand full application architecture,
            client–server communication, and how to effectively integrate
            frontend applications with REST APIs and backend services.
          </p>

          <p className="about-me-content-text">
            I have experience implementing responsive and mobile-first layouts,
            creating reusable React components with hooks, managing application
            state using useState, useEffect, Context API, and Redux Toolkit, and
            applying strict typing with TypeScript to improve maintainability
            and code reliability.
          </p>

          <p className="about-me-content-text">
            In addition, I work confidently with Git and understand
            collaborative development workflows including version control, pull
            requests, and code reviews. I value clean, readable, and
            maintainable code and pay strong attention to detail, believing that
            product quality begins with well-structured interfaces and carefully
            implemented functionality.
          </p>

          <p className="about-me-content-text">
            I am motivated, quick to learn, and always open to new technologies
            and approaches. My English level is B1+, which allows me to read
            technical documentation, communicate about development tasks, and
            work effectively in international teams. My goal is to grow as a
            developer within a professional team, contribute to meaningful
            products, and continuously improve my technical skills.
          </p>
        </div>

        <img className="about-me-content-image" src={myPhoto} alt="My Photo" />
      </div>
    </section>
  );
}

export default AboutMe;
