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
  const currentYear = new Date().getFullYear();
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
      <div className="copyright">
          <p>&copy; {currentYear} Brandon Nguyen. All rights reserved.</p>
        </div>
    </div>
  );
}



export default App;