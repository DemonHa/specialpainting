import ThemeSwitcher from "@/components/theme-switcher";
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (_: boolean) => {},
});

const DarkModeProvider = ({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (value: boolean) => {
    if (value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(value);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode: handleDarkMode }}>
      {children}
      <FloatingDarkMode />
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const FloatingDarkMode = () => {
  return (
    <div className="hidden xl:flex fixed z-[9] bottom-8 left-4">
      <ThemeSwitcher size="small" filled />
    </div>
  );
};

export { DarkModeProvider, useDarkMode };
