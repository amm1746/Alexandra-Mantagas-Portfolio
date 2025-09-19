import React from "react";
import "./Skills.css";
import { FaPython, FaJs, FaJava, FaNodeJs, FaReact, FaDatabase, FaDocker} from "react-icons/fa"; // Font Awesome icons
import { SiCplusplus } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { SiC } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiPandas, SiNumpy } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" >Skills</h2>
      <div className="skills-container" data-aos="fade-up">
        <div className="skills-box">
          <h3>Programming Languages</h3>
          <ul>
            <li><FaPython className="skill-icon" /> Python</li>
            <li><FaJava className="skill-icon" /> Java</li>
            <li><FaJs className="skill-icon" /> JavaScript</li>
            <li><SiC className="skill-icon" /> C</li>
            <li><SiCplusplus className="skill-icon" /> C++</li>
            <li><TbBrandCSharp className="skill-icon" /> C#</li>
            <li><TbSql className="skill-icon" /> SQL</li>

          </ul>
        </div>
        <div className="skills-box">
          <h3>Backend Technologies</h3>
          <ul>
            <li><FaNodeJs className="skill-icon" /> Node.js</li>
            <li><SiDjango className="skill-icon" /> Django</li>
            <li><BiLogoSpringBoot className="skill-icon" /> Spring Boot</li>
          </ul>
        </div>
        <div className="skills-box">
          <h3>Frontend Technologies</h3>
          <ul>
            <li><FaReact className="skill-icon" /> React</li>
            <li><FaHtml5 className="skill-icon" /> HTML</li>
            <li><FaCss3Alt className="skill-icon" /> CSS</li>
          </ul>
        </div>
        <div className="skills-box">
          <h3>Other Tools & Libraries</h3>
          <ul>
            <li><SiPandas className="skill-icon" /> Pandas</li>
            <li><SiNumpy className="skill-icon" /> NumPy</li>
            <li><FaDocker className="skill-icon" /> Docker</li>
            <li><FaGitAlt className="skill-icon" /> Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
