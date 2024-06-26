// components/Introduction.js
import React, { useState } from 'react';
import TypeWriter from './TypeWriter';

function Introduction() {
  const [showName, setShowName] = useState(false);

  return (
    <section id="introduction">
      <div className="intro-content">
        <h1>
          <TypeWriter 
            text="Hello, I'm " 
            delay={100} 
            onTypingComplete={() => setShowName(true)}
          />
        </h1>
        {showName && <h2 className="name">Brandon Nguyen</h2>}
        <img src="intropic.JPG" alt="Brandon Nguyen" className="profile-pic" />
        <p>CS @ UCR</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourusername"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:your.email@example.com"><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
}

export default Introduction;