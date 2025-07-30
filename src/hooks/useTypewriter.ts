import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  delay?: number;
  deleteDelay?: number;
  loop?: boolean;
}

export const useTypewriter = ({ 
  words, 
  delay = 100, 
  deleteDelay = 50, 
  loop = true 
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentChar < currentWord.length) {
          setDisplayText(currentWord.slice(0, currentChar + 1));
          setCurrentChar(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentChar > 0) {
          setDisplayText(currentWord.slice(0, currentChar - 1));
          setCurrentChar(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prev => loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1));
        }
      }
    }, isDeleting ? deleteDelay : delay);

    return () => clearTimeout(timeout);
  }, [currentChar, currentWordIndex, isDeleting, words, delay, deleteDelay, loop]);

  return displayText;
};