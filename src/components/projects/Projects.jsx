import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Fake Currency Detection System",
    description: (
      <ul>
        <li>Uses Convolutional Neural Networks (CNNs) for counterfeit currency detection.</li>
        <li>Utilizes TensorFlow for deep learning and OpenCV for image processing.</li>
        <li>Automates the identification of fake currency with high accuracy.</li>
      </ul>
    ),
    link: "https://github.com/Sid-Siddharth16",
  },
  {
    title: "Personal Portfolio",
    description: (
      <ul>
        <li>A personal portfolio developed using React.js.</li>
        <li>Showcases projects and skills in web development.</li>
        <li>Responsive design for an optimal user experience.</li>
      </ul>
    ),
    link: "https://github.com/Sid-Siddharth16/Portfolio",
  },
  {
    title: "Tic Tac Toe Game",
    description: (
      <ul>
        <li>A simple Tic Tac Toe game built with React.js.</li>
        <li>Implements a 2-player mode where players take turns to mark X and O on the grid.</li>
        <li>Features real-time game state updates with win/loss detection and a restart option.</li>
      </ul>
    ),
    link: "https://github.com/Sid-Siddharth16/TicTacToe-Game",
  },
  {
    title: "Calculator",
    description: (
      <ul>
        <li>A calculator project using HTML, CSS, and JavaScript.</li>
      </ul>
    ),
    link: "https://github.com/Sid-Siddharth16/Calculator_project",
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
              <div>{project.description}</div> {/* Render as unordered list */}
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
