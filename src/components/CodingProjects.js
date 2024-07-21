import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'rizz.png',
    languages: ['Gyatt'],
    description: 'Let me cook',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'rizz.png',
    languages: ['Rizz'],
    description: 'Skibidi toilet',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'rizz.png',
    languages: ['Skibidi'],
    description: 'deez nuts',
    githubUrl: 'https://github.com/yourusername/project3',
  }
];

const ProjectCard = ({ project }) => {
  return (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card">
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
    </a>
  );
};

const ProjectsSection = () => {
  const customTheme = {
    dark: ['#f8f9fa', '#cbb2fe', '#a284f6', '#8645e6', '#5c00b6'],
  };

  return (
    <section section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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