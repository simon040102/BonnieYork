import { useState } from 'react';
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useThem = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [data, setData] = useState({
    status: 'customer',
  });

  return (
    <ThemeContext.Provider value={{ data, setData }}>
      {children}
    </ThemeContext.Provider>
  );
};
