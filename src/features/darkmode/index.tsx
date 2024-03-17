import ThemeSwitcher from "@/components/theme-switcher";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";


const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (_: boolean) => {},
});

const DarkModeProvider = ({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) => {

  const key = "darkMode";
  const isBrowser = typeof window !== "undefined";

  const [darkMode, setDarkMode] = useState(
    isBrowser && localStorage.getItem(key) === "true",
  );

  const handleDarkMode = useCallback((value: boolean) => {
    if (value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(key, "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(key, "false");
    }
    setDarkMode(value);
  }, []);

  useEffect(() => {
    handleDarkMode(darkMode);
  }, [darkMode, handleDarkMode]);


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
