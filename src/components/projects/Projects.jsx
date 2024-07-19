// Projects.js
import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Movix",
    description:
      "A website showing various movies' ratings with their trailers, built with React.js and SCSS.",
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio developed using React.js.",
    link: "#",
  },
  {
    title: "Real Time Device Tracker",
    description:
      "This project involves creating a real-time device tracking system that displays the location of devices on a map using Node.js, Socket.io, Expressjs.",
    link: "#",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A simple Tic Tac Toe game built with React.js.",
    link: "#",
  },
  {
    title: "Calculator",
    description: "A calculator project using HTML, CSS, and JavaScript.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
