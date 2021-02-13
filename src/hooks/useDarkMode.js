import { useToggle } from '@hooks';
import { useEffect } from 'react';

export const useDarkMode = (initialOn) => {
  const darkMode = useToggle(false);

  useEffect(() => {
    if (darkMode.on) {
      document.body.setAttribute('data-theme', 'dark');
      console.log('darkmode on');
    } else {
      document.body.removeAttribute('data-theme');
      console.log('darkmode off');
    }
  }, [darkMode.on]);

  return darkMode;
};
