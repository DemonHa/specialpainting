"use client";

import React from "react";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { motion } from "framer-motion";
import { useDarkMode } from "@/features/darkmode";

const ThemeSwitcher = ({
  size = "medium",
  filled = false,
}: {
  size?: "small" | "medium";
  filled?: boolean;
}) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const variants = {
    medium: {
      light: { x: "58%" },
      dark: { x: "-58%" },
    },
    small: {
      light: { x: "65%" },
      dark: { x: "-65%" },
    },
  };

  const sizeClass = {
    small: "w-[4rem] h-[2rem]",
    medium: "w-[5rem] h-[2.6rem]",
  };

  const circleSizeClass = {
    small: "w-[1.5rem] h-[1.5rem]",
    medium: "h-[2.1rem] w-[2.1rem]",
  };

  const iconSizeClass = {
    small: "1rem",
    medium: "1.7rem",
  };

  return (
    <div
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={`${sizeClass[size]} relative ${filled ? "bg-slate-700 text-white" : "bg-inherit border"}  dark:border-gray-300 border-slate-700 rounded-full flex justify-around items-center cursor-pointer`}
    >
      <motion.div
        className={`absolute bg-red-500 ${circleSizeClass[size]} rounded-full z-0`}
        initial={darkMode ? "dark" : "light"}
        animate={darkMode ? "dark" : "light"}
        variants={variants[size]}
        transition={{ duration: 0.2 }}
      />
      <PiMoonLight className="z-10" size={iconSizeClass[size]} />
      <GoSun className="z-10" size={iconSizeClass[size]} />
    </div>
  );
};

export default ThemeSwitcher;
