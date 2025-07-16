import React from "react";

import "./App.scss";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Education />
        {/* <Projects /> */}
      </main>
    </div>
  );
}

export default App;
