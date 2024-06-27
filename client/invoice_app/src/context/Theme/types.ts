import { ReactNode } from "react";

export type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export type Theme = "dark" | "light";

export type ThemeContextProps = {
  children: ReactNode;
};
