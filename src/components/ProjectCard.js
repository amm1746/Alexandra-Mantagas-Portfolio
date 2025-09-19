import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, tech, demoLink, githubLink }) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech.join(", ")}</p>
      <div className="links">
        {demoLink && <a href={demoLink} target="_blank">Live Demo</a>}
        {githubLink && <x href={githubLink} target="_blank">GitHub</x>}
      </div>
    </div>
  );
};

export default ProjectCard;
