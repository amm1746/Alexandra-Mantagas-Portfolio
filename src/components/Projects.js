import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projectList = [
  { 
    image: "/icons/wildfire.png",
    title: "Wildfire Relief Project",
    description: "Crowdfunding platform dedicated to helping wildfire victims get the resources they need.",
    tech: ["Java, Typescript, CSS, Spring Boot, Angular"],
    githubLink: "https://github.com/amm1746/Wildfire-Relief",
  },
  {
    image: "/icons/music.png",
    title: "Music Collection & Recommendation System",
    description: "SQL relational database designed to manage users, songs, albums, listening activity, and more.",
    tech: ["Python, PostgreSQL"],
    githubLink: "https://github.com/amm1746/Music-Collection-Recommendation-System",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid" data-aos="fade-up">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
