import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const ScrollIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const observersRef = useRef([]);
  const intersectionRatios = useMemo(() => new Array(sections.length).fill(0), [sections.length]);

  const buildThresholdList = useCallback(() => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    return thresholds;
  }, []);

  const observerOptions = useMemo(() => ({
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: buildThresholdList(),
  }), [buildThresholdList]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = sections.findIndex((section) => section === entry.target.id);
        intersectionRatios[index] = entry.intersectionRatio;
      });

      const maxRatio = Math.max(...intersectionRatios);
      const newActiveSection = intersectionRatios.indexOf(maxRatio);

      if (newActiveSection !== -1 && maxRatio > 0.1) {
        setActiveSection(newActiveSection);
      }
    };

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        return observer;
      }
      return null;
    }).filter(Boolean);

    observersRef.current = observers;

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections, observerOptions, intersectionRatios]);

  return (
    <div className="scroll-indicator">
      <div className="progress-bar" style={{ width: `${(activeSection + 1) * (100 / sections.length)}%` }}></div>
      {sections.map((section, index) => (
        <div
          key={section}
          className={`indicator-point ${index <= activeSection ? 'active' : ''}`}
          style={{ left: `${index * (100 / (sections.length - 1))}%` }}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;