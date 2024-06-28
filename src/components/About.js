import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p> I'm a first-generation student studying Computer Science at the University of California, Riverside, graduating in June 2027.</p>
          <p>
            I've always been passionate about technology and finding solutions to improve the world.  
          </p>
          <p>
            I'm currently seeking Software Engineering internship positions for the Summer 2025! 
          </p>
        </div>
        <div className="about-image">
          <img src="about.JPG" alt="Brandon Nguyen" />
        </div>
      </div>
    </section>
  );
}

export default About;