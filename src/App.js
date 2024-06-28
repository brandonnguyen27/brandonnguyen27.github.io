import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import LanguagesFrameworks from './components/LanguagesFrameworks';
import JobExperience from './components/JobExperience';
import CodingProjects from './components/CodingProjects';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';
import About from './components/About';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FadeInSection>
          <Introduction />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <LanguagesFrameworks />
        </FadeInSection>
        <FadeInSection>
          <JobExperience />
        </FadeInSection>
        <FadeInSection>
          <CodingProjects />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      All rights reserved &copy; 2024
    </div>
  );
}

export default App;