import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <h1 className="hero-title">
        Hello! I'm <span className="highlight">Alexandra</span>.
    </h1>
      <p>I'm a 3rd year Computer Science Student minoring in Economics at RIT, and an aspiring software developer
        with 2+ years of experience. I build end-to-end software applications, automation
        pipelines, backend services, data-driven tools, and more. My projects focus on efficiency 
        and solving real-world problems. 
      </p>
    </section>
  );
};

export default Hero;
