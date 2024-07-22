import React, { useState, useEffect } from 'react';

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
      
      if (prevScrollPos <= currentScrollPos && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  const scrollToSection = (elementId) => {
    if (elementId === 'resume') {
      window.open('/res.pdf', '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navigationItems = ['about', 'skills', 'experience', 'projects', 'contact', 'resume'].map((section) => (
    <li key={section} className={section === 'resume' ? 'resumeButton' : ''}>
      {section === 'resume' ? (
        <a href="/res.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      ) : (
        <a onClick={() => scrollToSection(section)}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      )}
    </li>
  ));

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <div className="logo-container" onClick={() => scrollToSection('introduction')}>
          <img src="favicon.ico" alt="Brandon Nguyen Logo" className="logo"/>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${isMenuOpen ? 'open' : ''} ${visible ? 'visible' : 'hidden'}`}>
          <ul>{navigationItems}</ul>
        </nav>
      </div>
      <style jsx>{`
        header {
          background-color: rgba(255, 255, 255, 1);
          padding: 0.8rem 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.3s ease-in-out;
          font-weight: 500;
        }

        .header.visible {
          transform: translateY(0);
        }

        .header.hidden {
          transform: translateY(-100%);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .logo {
          height: 30px;
          width: auto;
          display: block;
        }
        nav ul {
          display: flex;
          justify-content: flex-end;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        nav ul li {
          margin-left: 2rem;
        }

        nav ul li a:hover {
          color: #A100FF;
          transition: color 0.4s ease;
        }
        .resumeButton a {
          background-color: white;
          color: #a100FF;
          padding: 2.5px 5px;
          border: 2px solid #a100FF;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .resumeButton a:hover {
          background-color: #a100FF;
          color: white;
        }
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
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          nav {
            display: none;
          }
          nav.open {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          nav ul {
            flex-direction: column;
            padding: 0;
          }
          nav ul li {
            margin: 10px 0;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;