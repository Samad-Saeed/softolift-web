// useDarkMode.js
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on preference
    setIsDarkMode(prefersDarkMode);

    // Listen for changes in the preferred color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleThemeChange);

    // Clean up the event listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
