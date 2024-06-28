import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const customTheme = {
  dark: ['#ffffff', '#cbb2fe', '#a284f6', '#8645e6', '#5c00b6'],
};

function CodingProjects() {
  return (
    <section id="projects">
      <h2>Coding Projects</h2>
      <div className="project">
        <h3>Project Name</h3>
        <p>Project Description</p>
        <a href="project-url">View Project</a>
      </div>
      {/* Add more projects as needed */}
      
      <h3>My GitHub Contributions</h3>
      <GitHubCalendar username="bnguy408"
      theme={customTheme} />
    </section>
  );
}

export default CodingProjects;