import React, { useState, useEffect } from 'react';
import TypeWriter from './TypeWriter';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DELAY = 500;

function Introduction() {
  const [showName, setShowName] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [showBalls, setShowBalls] = useState(false);

  const handleTypingComplete = () => setShowName(true);

  useEffect(() => {
    if (showName) {
      const timer = setTimeout(() => setShowPicture(true), DELAY);
      return () => clearTimeout(timer);
    }
  }, [showName]);

  useEffect(() => {
    if (showPicture) {
      const timer = setTimeout(() => setShowBalls(true), DELAY);
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
            onTypingComplete={handleTypingComplete}
          />
        </h1>
        {showName && <h2 className="name">Brandon Nguyen</h2>}
        <div className={`profile-pic-container ${showPicture ? 'show' : ''}`}>
          <img src="intropic.JPG" alt="Brandon Nguyen" className="profile-pic" />
          {showBalls && (
            <div className="social-balls">
              {[
                { href: "https://github.com/bnguy408", className: "github", icon: "fab fa-github", label: "GitHub" },
                { href: "https://linkedin.com/in/brannguy27", className: "linkedin", icon: "fab fa-linkedin", label: "LinkedIn" },
                { href: "/path-to-your-resume.pdf", className: "resume", icon: "fas fa-file-alt", label: "Resume" }
              ].map(({ href, className, icon, label }) => (
                <a key={className} href={href} className={`ball ${className}`} aria-label={label}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Introduction;