import React, { useState } from 'react';

function CourseworkOverlay({ isOpen, onClose, courses }) {
  if (!isOpen) return null;

  return (
    <div className="coursework-overlay">
      <div className="coursework-content">
        <h2>Relevant Coursework</h2>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <div className="course-info">
                <h3>{course.name}</h3>
                <p className="course-code">{course.code}</p>
              </div>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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
  const courses = [
    {
      name: 'C++ Object-Oriented Programming',
      code: 'UCR CS010B',
      description: 'Studied OOP concepts including classes, inheritance, polymorphism, and encapsulation. Developed multiple projects using C++ to reinforce OOP principles.'
    },
    {
      name: 'Intermediate Data Structures and Algorithms',
      code: 'UCR CS141',
      description: 'Studied OOP concepts including classes, inheritance, polymorphism, and encapsulation. Developed multiple projects using Java to reinforce OOP principles.'
    },
    {
      name: 'Software Design',
      code: 'UCR CS100',
      description: 'Studied OOP concepts including classes, inheritance, polymorphism, and encapsulation. Developed multiple projects using Java to reinforce OOP principles.'
    },
    {
      name: 'Linear Algebra',
      code: 'UCR MATH031',
      description: 'Studied machine learning algorithms and linear algebra concepts including matrix operations, vector spaces, and eigenvalues.'
    },
    {
      name: 'Multivariable Calculus',
      code: 'UCR MATH010AC',
      description: 'Multivariable calculus concepts including partial derivatives, double integrals, and vector calculus. Applied calculus concepts to solve optimization problems.'
    },
    {
      name: 'Discrete Structures',
      code: 'UCR CS111',
      description: 'this class was hardd'
    },
    {
      name: 'Computer Architecture and Assembly Language Programming',
      code: 'CS061',
      description: 'Studied OOP uuconcepts including classes, inheritance, polymorphism, and encapsulation. Developed multiple projects using Java to reinforce OOPuuuuu principles.'
    },
  ];
  const getExperienceClass = (years) => {
    if (years >= 3) return 'high-experience';
    if (years >= 1) return 'medium-experience';
    return 'low-experience';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <button className="coursework-button" onClick={() => setIsOverlayOpen(true)}>
          Relevant Coursework
        </button>
        <div className="experience-key">
          <span className="high-experience"></span> 16-24 months 
          <span className="medium-experience"></span> 8-16 months 
          <span className="low-experience"></span> &lt;8 months
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
      <CourseworkOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        courses={courses}
      />
    </section>
  );
}


export default SkillsSection;