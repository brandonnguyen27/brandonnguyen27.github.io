import React, { useState, useEffect } from 'react';

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <div className="logo-container">
          <a onClick={() => scrollToSection('introduction')}>
            <img src="favicon.ico" alt="Brandon Nguyen Logo" className="logo"/>
          </a>
        </div>
        <nav>
          <ul>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li className="resumeButton"><a onClick={() => scrollToSection('resume')}>Resume</a></li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        nav ul li a {
          cursor: pointer;
        }
        .logo-container {
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .logo-container:hover {
          transform: scale(1.1);
        }
      `}</style>
    </header>
  );
}

export default Header;