import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import LanguagesFrameworks from './components/LanguagesFrameworks';
import JobExperience from './components/JobExperience';
import CodingProjects from './components/CodingProjects';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';
import About from './components/About';
import ScrollIndicator from './components/ScrollIndicator';
import './App.css';

const currentYear = new Date().getFullYear();

function App() {

  const sections = ['introduction', 'about', 'languages', 'experience', 'projects', 'contact'];
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionIndex = sections.findIndex(
            (section) => section === entry.target.id
          );
          console.log('Active section:', sections[activeSectionIndex]);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <div className="App">
      <Header />
      <main>
        <FadeInSection>
          <section ref={sectionRefs.current[0]} id="introduction">
            <Introduction />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section ref={sectionRefs.current[1]} id="about">
            <About />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section ref={sectionRefs.current[2]} id="languages">
            <LanguagesFrameworks />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section ref={sectionRefs.current[3]} id="experience">
            <JobExperience />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section ref={sectionRefs.current[4]} id="projects">
            <CodingProjects />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section ref={sectionRefs.current[5]} id="contact">
            <Contact />
          </section>
        </FadeInSection>
      </main>
      <ScrollIndicator sections={sections} />
      <div className="copyright">
        <p>&copy; {currentYear} Brandon Nguyen - Thanks for stopping by!</p>
      </div>
    </div>
  );
}

export default App;