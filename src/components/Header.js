import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <img src= "favicon.ico" alt="Brandon Nguyen Logo" className="logo" href="#introduction"/>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;