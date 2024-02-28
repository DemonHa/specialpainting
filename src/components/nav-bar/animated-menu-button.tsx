import React from "react";
import { motion } from "framer-motion";

type props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const AnimatedMenuButton = ({ setOpen, open }: props) => {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className="min-w-[60px] flex justify-center align-middle items-center"
    >
      <div className="flex flex-col space-y-2.5 items-center justify-center p-3 h-[60px] max-w-[40px] ">
        <motion.div
          className="bg-black dark:bg-white w-[30px]"
          initial={{ transform: "rotate(0deg)" }}
          animate={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          transition={{ duration: 0.2 }}
          style={{ originX: 0.24, originY: 0.5, height: "2px" }}
        />
        <motion.div
          className="bg-black  dark:bg-white w-[30px]"
          initial={{ transform: "rotate(0deg)" }}
          animate={{ transform: open ? "rotate(-45deg)" : "rotate(0deg)" }}
          transition={{ duration: 0.2 }}
          style={{ originX: 0.24, originY: 0.5, height: "2px" }}
        />
      </div>
    </button>
  );
};

export default AnimatedMenuButton;
