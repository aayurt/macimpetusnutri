import './style/_global.scss';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { createContext, useEffect, useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkTheme));
  }, [darkTheme]);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <div className={darkTheme ? 'dark' : ''}>
        <RouterProvider router={Router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export const ThemeContext = createContext('light');
