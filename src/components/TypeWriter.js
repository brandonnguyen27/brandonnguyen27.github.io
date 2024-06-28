// components/TypeWriter.js
import React, { useState, useEffect } from 'react';

function TypeWriter({ text, delay, onTypingComplete }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
      onTypingComplete();
    }
  }, [currentIndex, delay, text, isTypingComplete, onTypingComplete]);

  return (
    <span className={`typewriter ${isTypingComplete ? 'typing-complete' : ''}`}>
      {currentText}
    </span>
  );
}

export default TypeWriter;