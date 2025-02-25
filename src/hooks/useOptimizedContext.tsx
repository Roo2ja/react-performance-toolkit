import React, { createContext, useContext, useState, ReactNode, FC } from "react";

// Define the shape of the context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value of `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
