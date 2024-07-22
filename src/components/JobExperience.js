import React from 'react';

const jobData = [
  {
    date: 'Sep 2024 - Dec 2024',
    logo: 'ST.jpg',
    position: 'Software Engineer Intern',
    company: 'Stealth Startup',
    description: [
      'Incoming Fall 2024'
    ],
  },
  {
    date: 'Jul 2024 - Aug 2024',
    logo: 'HS.jpg',
    position: 'Software Engineer Fellow',
    company: 'Headstarter AI',
    description: [
      'Built 5+ AI projects',
      'Scaled app to 1000 users',
      'Gained mentorship from industry professionals'
    ],
  },
  {
    date: 'Jun 2024 - Present',
    logo: 'DA.png',
    position: 'AI Analyst',
    company: 'Data Annotation',
    description: [
      'Analyzed and create code snippets given AI prompts',
      'prompt engineering'
    ]
  },
];

const JobExperience = () => {
  return (
    <section id="job-experience" className="job-section">
    <div className="job-content">
      <h2>Job Experience</h2>
      <div className="timeline">
        {jobData.map((job, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-content">
              <div className="content-header">
                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                <div className="header-text">
                  <h3>{job.position}</h3>
                  <h4>{job.company}</h4>
                </div>
              </div>
              <ul className="job-description">
                {job.description.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default JobExperience;