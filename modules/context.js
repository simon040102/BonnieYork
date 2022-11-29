import { useState } from 'react';
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useThem = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const apiUrl = 'https://bonnieyork.rocket-coding.com';
  const [data, setData] = useState({
    status: 'customer',
  });

  return (
    <ThemeContext.Provider value={{ data, setData, apiUrl }}>
      {children}
    </ThemeContext.Provider>
  );
};
