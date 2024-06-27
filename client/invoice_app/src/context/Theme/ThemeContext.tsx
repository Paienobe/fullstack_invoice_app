import { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeContextProps, ThemeContextType } from "./types";

const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const getPreservedTheme = () => {
    const storedTheme = localStorage.getItem("invoice_app_theme");
    if (storedTheme) {
      return storedTheme as Theme;
    } else return "light" as Theme;
  };

  const [theme, setTheme] = useState<Theme>(getPreservedTheme());

  useEffect(() => {
    const documentElementClassList = document.documentElement.classList;
    if (theme == "light") {
      documentElementClassList.remove("dark");
      documentElementClassList.add(theme);
    } else {
      documentElementClassList.remove("light");
      documentElementClassList.add(theme);
    }
    preserveTheme();
  }, [theme]);

  const preserveTheme = () => {
    localStorage.setItem("invoice_app_theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
