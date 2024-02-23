"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence  } from 'framer-motion';
import NavBarLink from "./nav-bar-link";

const menuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  open: {
    height: '100dvh', // Target height for the open state
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  }
};

const Navbar = () => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Optional: Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div>
      <div className="flex justify-between w-full border-b border-slate-700 divide-x divide-slate-700 max-h-[40px] lg:max-h-none xl:max-h-none z-20">
        <div className="flex-1 flex items-center">
          <div className="p-5 text-xl">VENTION</div>
        </div>
        <div className="flex xl:hidden border-l border-slate-700 min-w-[50px]:">
          <button
            onClick={() => { setOpen((prev) => !prev) }}
            className="min-w-[60px] flex justify-center align-middle items-center">
            <div className="flex flex-col space-y-2.5 items-center justify-center p-3 h-[60px] max-w-[40px] ">
              <motion.div
                className=" bg-white w-[30px]"
                initial={{ transform: "rotate(0deg)" }}
                animate={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0.24, originY: 0.5, height: "2px" }}
              />
              <motion.div
                className=" bg-white w-[30px]"
                initial={{ transform: "rotate(0deg)" }}
                animate={{ transform: open ? "rotate(-45deg)" : "rotate(0deg)" }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0.24, originY: 0.5, height: "2px" }}
              />
            </div>
          </button>
        </div>
        {/* menu for big screens */}
        <div className="hidden xl:flex justify-between text-xl">
          <NavBarLink text="What we do" />
          <NavBarLink text="Portfolio" />
          <NavBarLink text="Insights" />
          <NavBarLink text="About us" />
          <NavBarLink text="Contact us" filled />
        </div>
      </div>
      {/* menu for small screens */}
      <AnimatePresence>
      {open &&  <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="z-10 absolute w-full overflow-hidden flex"
            style={{ top: '40px' }} // Adjust accordingly
          >
        <div className="w-[30vw] h-[94dvh] bg-glass-bg bg-opacity-35 shadow-glass backdrop-blur-glass border border-glass-border"></div>
        <div className=" bg-black h-[95dvh] w-[70vw]">
          <div className="h-[15vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700">What we do</div>
          <div className="h-[10vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer">Interior</div>
          <div className="h-[10vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer">Exterior</div>
          <div className="h-[15vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700">About Us</div>
          <div className="h-[10vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer">Company</div>
          <div className="h-[10vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer">Reviews</div>
        </div>
      </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
