import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import "./index.css";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
    </div>
  );
};

export default App;
