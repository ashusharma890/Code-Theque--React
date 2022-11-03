import { createContext, useState, useContext } from "react";

interface ThemeContextType {
  theme: any;
  setTheme: any;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
//   {
//      backgroundColor: 'black'
//      color: ''
//   }

export const ThemeContextProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState({
    background: "#fafafa",
    color: "black",
  });

  const values: ThemeContextType = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
