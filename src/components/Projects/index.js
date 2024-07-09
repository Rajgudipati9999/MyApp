import React from 'react';
import './index.css';

const projects = [
  { name: 'Jobby App', description: 'This is the first project.', link: '' },
  { name: 'Match Game', description: 'This is the second project.', link: 'https://rajgudipati9999.github.io/match-game' },
  { name: 'Password Manager', description: 'This is the third project.', link: 'https://rajgudipati9999.github.io/password-manager' },
  { name: 'Ipl Dashboard', description: 'This is the fourth project.', link: '#' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
