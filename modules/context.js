/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useThem = () => useContext(ThemeContext);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const apiUrl = 'https://bonnieyork2023.rocket-coding.com';
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    status: 'customer',
  });

  return (
    <ThemeContext.Provider
      value={{ data, setData, apiUrl, loading, setLoading }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
