import logo from './logo.svg';
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import './App.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
