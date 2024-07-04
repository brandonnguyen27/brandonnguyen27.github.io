import React, { useState, useEffect } from 'react';
import TypeWriter from './TypeWriter';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Introduction() {
  const [showName, setShowName] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [showBalls, setShowBalls] = useState(false);

  useEffect(() => {
    if (showName) {
      const timer = setTimeout(() => setShowPicture(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showName]);
  useEffect(() => {
    if (showPicture) {
      const timer = setTimeout(() => setShowBalls(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showPicture]);
  return (
    <section id="introduction">
      <div className="intro-content">
        <h1>
          <TypeWriter 
            text="Hello, I'm " 
            delay={75} 
            onTypingComplete={() => setShowName(true)}
          />
        </h1>
        {showName && <h2 className="name">Brandon Nguyen</h2>}
        <div className={`profile-pic-container ${showPicture ? 'show' : ''}`}>
          <img src="intropic.JPG" alt="Brandon Nguyen" className="profile-pic" />
          {showBalls && (
              <div className="social-balls">
                <a href="https://github.com/bnguy408" className="ball github" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/brannguy27" className="ball linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/path-to-your-resume.pdf" className="ball resume" aria-label="Resume">
                  <i className="fas fa-file-alt"></i>
                </a>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default Introduction;