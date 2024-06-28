import React from 'react';

function SkillsSection() {
  const skills = {
    Languages: [
      { name: 'Python', experience: 3 },
      { name: 'Java', experience: 3 },
      { name: 'JavaScript', experience: 2 },
      { name: 'C++', experience: 0},
      { name: 'HTML/CSS', experience: 3 }, 
      { name: 'SQL', experience: 0 },
    ],
    Frameworks: [
      { name: 'ReactJS', experience: 2 },
      { name: 'NextJS', experience: 0 },
      { name: 'Bootstrap', experience: 0 },
      { name: 'Node.js', experience: 2 },
      { name: 'Express.js', experience: 1 },
    ],
    Other: [
      { name: 'Firebase', experience: 2 },
      { name: 'Axios', experience: 1 },
      { name: 'Bash', experience: 1 },
      { name: 'Git', experience: 3 },
      { name: 'MongoDB', experience: 1 },
    ],
  };

  const getExperienceClass = (years) => {
    if (years >= 3) return 'high-experience';
    if (years >= 1) return 'medium-experience';
    return 'low-experience';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="experience-key">
          <span className="high-experience"></span> 3+ years 
          <span className="medium-experience"></span> 1-3 years 
          <span className="low-experience"></span> &lt;1 year
        </div>
      </div>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill.name} className={getExperienceClass(skill.experience)}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default SkillsSection;