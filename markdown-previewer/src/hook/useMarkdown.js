import { useState, useEffect, useRef } from 'react';
import { initalContent } from '../assets/initalContent';

export const useMarkdown = () => {
  const [markdownContent, setmarkdownContent] = useState(initalContent);
  const componentRef = useRef();
  const handleMarkdown = (e) => {
    setmarkdownContent(e.target.value);
  };

  const saveData = () => {
    localStorage.setItem('markdownContent', markdownContent);
    alert('Saved the markdown');
  };

  useEffect(() => {
    const storedMarkdownContent = localStorage.getItem('markdownContent');
    if (storedMarkdownContent) {
      setmarkdownContent(storedMarkdownContent);
    }
  }, []);

  return {
    handleMarkdown,
    markdownContent,
    setmarkdownContent,
    saveData,
    componentRef,
  };
};
