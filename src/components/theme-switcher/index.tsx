"use client";

import React, { useState } from 'react';
import { PiMoonLight } from "react-icons/pi"; 
import { GoSun } from "react-icons/go";
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const [lightMode, setLightMode] = useState(true);

  const variants = {
    light: { x: '58%' },
    dark: { x: '-58%' },
  };

  const handleSwitch = () => {
    setLightMode(!lightMode);
  };

  return (
    <div onClick={handleSwitch} className='w-[6rem] h-[3rem] relative bg-inherit border border-gray-300 rounded-full flex justify-around items-center cursor-pointer'>
      <motion.div
        className='absolute bg-red-500 h-[2.5rem] w-[2.5rem] rounded-full z-0'
        initial={lightMode ? 'light' : 'dark'} 
        animate={lightMode ? 'light' : 'dark'}
        variants={variants}
        transition={{ duration: 0.2 }}
      />
      <PiMoonLight className='z-10' size={'1.5rem'}/>
      <GoSun className='z-10' size={'1.5rem'}/>
    </div>
  );
};

export default ThemeSwitcher;