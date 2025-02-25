import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Project',
    image: 'rizz.png',
    videoDemo: 'path/to/video1.mp4',
    languages: ['Python', "In progress"],
    description: 'Short descriptoin here',
    longDescription: 'This is more detailed descripton',
    githubUrl: 'https://github.com',
    liveUrl: 'https://yustalkingmywebsiteboi.com',
    date: 'January 2024',
  },
  {
    id: 2,
    title: 'Project',
    image: 'rizz.png',
    videoDemo: 'path/to/video1.mp4',
    languages: ['Python'],
    description: 'Short descriptoin here',
    longDescription: 'This is more detailed descripton',
    githubUrl: 'https://github.com',
    liveUrl: 'https://yustalkingmywebsiteboi.com',
    date: 'January 2024',
  },
  {
    id: 3,
    title: 'Project',
    image: 'rizz.png',
    videoDemo: 'path/to/video1.mp4',
    languages: ['Python'],
    description: 'Short descriptoin here',
    longDescription: 'This is more detailed descripton',
    githubUrl: 'https://github.com',
    liveUrl: 'https://yustalkingmywebsiteboi.com',
    date: 'January 2024',
  },
  {
    id: 3,
    title: 'Project',
    image: 'rizz.png',
    videoDemo: 'path/to/video1.mp4',
    languages: ['Python'],
    description: 'Short descriptoin here',
    longDescription: 'This is more detailed descripton',
    githubUrl: 'https://github.com',
    liveUrl: 'https://yustalkingmywebsiteboi.com',
    date: 'January 2024',
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-languages">
          {project.languages.map((lang, index) => (
            <span key={index} className="language-tag">
              {lang}
            </span>
          ))}
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectOverlay = ({ project, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="project-overlay" onClick={handleBackgroundClick}>
      <div className="project-overlay-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <video src={project.videoDemo} controls className="project-video"></video>
        <h2 className="project-title">{project.title}</h2>
        <div className="project-details">
          <div className="project-technologies">
            {project.languages.map((lang, index) => (
              <span key={index} className="language-tag">{lang}</span>
            ))}
          </div>
          <div className="project-date">{project.date}</div>
        </div>
        <p className="project-description">{project.longDescription}</p>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  const customTheme = {
    dark: ['#f8f9fa', '#cbb2fe', '#a284f6', '#8645e6', '#5c00b6'],
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
          ))}
        </div>
        {selectedProject && (
          <ProjectOverlay project={selectedProject} onClose={handleCloseOverlay} />
        )}
        <div className="github-calendar-container">
          <h3 className="github-calendar-title">My GitHub Contributions</h3>
          <div className="github-calendar-wrapper">
            <GitHubCalendar 
              username="brandonnguyen27" 
              theme={customTheme}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;