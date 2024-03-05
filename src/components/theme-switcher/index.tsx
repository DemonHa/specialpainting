"use client";

import React from "react";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { motion } from "framer-motion";
import { useDarkMode } from "@/features/darkmode";

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const variants = {
    light: { x: "58%" },
    dark: { x: "-58%" },
  };

  return (
    <div
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className="w-[6rem] h-[3rem] relative bg-inherit border dark:border-gray-300 border-slate-700 rounded-full flex justify-around items-center cursor-pointer"
    >
      <motion.div
        className="absolute bg-red-500 h-[2.5rem] w-[2.5rem] rounded-full z-0"
        initial={darkMode ? "dark" : "light"}
        animate={darkMode ? "dark" : "light"}
        variants={variants}
        transition={{ duration: 0.2 }}
      />
      <PiMoonLight className="z-10" size={"1.5rem"} />
      <GoSun className="z-10" size={"1.5rem"} />
    </div>
  );
};

export default ThemeSwitcher;
