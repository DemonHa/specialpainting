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
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export { DarkModeProvider, useDarkMode };
