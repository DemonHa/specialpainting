"use client";

import React from "react";
import { TbPaintOff } from "react-icons/tb";
import { TbPaintFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const BeforeAfterIndicator = ({
  isBefore,
  handleClick,
}: {
  isBefore: boolean;
  handleClick: () => void;
}) => {
  const variants = {
    before: { x: "58%" },
    after: { x: "-58%" },
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute w-[5rem] h-[2.6rem] bottom-3 right-3 bg-slate-700 bg-opacity-[0.6] backdrop-blur-[2px] text-white  dark:border-gray-300 border-slate-700 rounded-full flex justify-around items-center cursor-pointer z-10`}
    >
      <motion.div
        className={`absolute bg-orange-500 rounded-full z-0 h-[2.1rem] w-[2.1rem]`}
        initial={isBefore ? "before" : "after"}
        animate={isBefore ? "before" : "after"}
        variants={variants}
        transition={{ duration: 0.2 }}
      />
      <TbPaintOff className="z-10" size={"1.7rem"} />
      <TbPaintFilled className="z-10" size={"1.7rem"} />
    </div>
  );
};

export default BeforeAfterIndicator;
