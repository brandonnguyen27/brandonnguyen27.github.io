import React from 'react';

function JobExperience() {
  return (
    <section id="experience" className="job-experience-section">
      <h2>Job Experience</h2>
      <div className="job-container">
        <div className="job-logo">
          <img src="DA.png" alt="Data Annotation Logo" />
        </div>
        <div className="job-details">
          <h3>AI Trainer • Contract</h3>
          <h4>Data Annotation</h4>
          <p className="job-duration">June 2023 - Present</p>
          <ul className="job-responsibilities">
            <li>Trained and fine-tuned AI models to improve accuracy and performance.</li>
            <li>Annotated large datasets for machine learning applications.</li>
            <li>Collaborated with data scientists to optimize data labeling processes.</li>
            <li>Contributed to the development of annotation guidelines and quality assurance protocols.</li>
            <li>Participated in regular team meetings to discuss project progress and challenges.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default JobExperience;