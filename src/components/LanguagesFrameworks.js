import React, { useState } from 'react';

function CourseworkOverlay({ isOpen, onClose, courses }) {
  if (!isOpen) return null;

  return (
    <div className="coursework-overlay" onClick={onClose}>
      <div className="coursework-content" onClick={(e) => e.stopPropagation()}>
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
        <button className="coursework-button" onClick={onClose}>
          Back to Skills
        </button>
      </div>
    </div>
  );
}

function SkillsSection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const skills = {
    Languages: [
      { name: 'Python', experience: 3 },
      { name: 'Java', experience: 2 },
      { name: 'C++', experience: 3},
      { name: 'JavaScript', experience: 3 },
      { name: 'TypeScript', experience: 0 },
      { name: 'HTML/CSS', experience: 3 }, 
      { name: 'SQL', experience: 0 },
    ],
    Frameworks: [
      { name: 'ReactJS', experience: 2 }, 
      { name: 'Node.js', experience: 2 },
      { name: 'NextJS', experience: 0 },
      { name: 'TailwindCSS', experience: 0 },
      { name: 'GTest/GMock', experience: 0 }
    ],
    Technologies: [
      { name: 'AWS', experience: 1},
      { name: 'Firebase', experience: 0 },
      { name: 'Git', experience: 3 },
      { name: 'MongoDB', experience: 1 },
      { name: 'GDB', experience: 1 },
      { name: 'Valgrind', experience: 1 }
    ],
    
  };
  const courses = [
    {
      name: 'C++ Object-Oriented Programming',
      code: 'UCR CS010B',
      description: 'Reinforced fundamental concepts such as classes, objects, loops, functions, arrays, etc; Applied OOP principles through projects: abstraction, encapsulation, inheritance, polymorphism'
    },
    {
      name: 'Intermediate Data Structures and Algorithms',
      code: 'UCR CS141',
      description: 'Learned and applied data structures such as linked lists, stacks, queues, trees, and graphs; Implemented algorithms such as sorting, searching, and graph traversal'
    },
    {
      name: 'Software Design',
      code: 'UCR CS100',
      description: 'Studied software architecture, SOLID principles, and refactoring; Developed a project using agile SCRUM methodology, learned unit testing and test-driven development'
    },
    {
      name: 'Linear Algebra',
      code: 'UCR MATH031',
      description: 'Studied machine learning algorithms and linear algebra concepts including matrix operations, vector spaces, and eigenvalues.'
    },
    {
      name: 'Multivariable Calculus',
      code: 'UCR MATH010A',
      description: 'Learned multivariable calculus concepts including partial derivatives, double integrals, and vector calculus.'
    },
    {
      name: 'Discrete Structures',
      code: 'UCR CS111',
      description: 'Studied discrete math with a focus on applications to computer science, covering topics such as asymptotic notation, generating functions, recurrence equations, graph theory, trees, algebraic structures, and number theory.'
    },
    {
      name: 'Computer Architecture and Assembly Language Programming',
      code: 'CS061',
      description: 'Learned computer system organization, including CPU architecture, memory hierarchy, and I/O mechanisms; Gained practical experience in low-level programming by writing and debugging assembly programs'
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
          <span className="high-experience"></span> Proficient
          <span className="medium-experience"></span> Intermediate
          <span className="low-experience"></span> Beginner
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