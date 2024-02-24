"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import NavBarLink from "./nav-bar-link";
import AnimatedMenuButton from "./animated-menu-button";

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

const menuTitleStyles = "h-[15vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700";
const menuLinkStyles = "h-[10vh] flex justify-start items-end p-3 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer"

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
          <Link href="/"><div className="p-5 text-xl">VENTION</div></Link>
        </div>
        <div className="flex xl:hidden border-l border-slate-700 min-w-[50px]:">
          <AnimatedMenuButton setOpen={setOpen} open={open} />
        </div>
        {/* menu for big screens */}
        <div className="hidden xl:flex justify-between text-xl">
          <NavBarLink text="What we do" link="what-we-do" />
          <NavBarLink text="Portfolio" link="portfolio" />
          <NavBarLink text="Insights" link="insights" />
          <NavBarLink text="About us" link="about-us" />
          <NavBarLink text="Contact us" filled link="contact" />
        </div>
      </div>
      {/* menu for small screens */}
      <AnimatePresence>
        {open && <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="z-10 absolute w-full overflow-hidden flex"
          style={{ top: '40px' }} // Adjust accordingly
        >
          <div className="w-[30vw] h-[94dvh] bg-glass-bg bg-opacity-35 shadow-glass backdrop-blur-glass border border-glass-border"></div>
          <div className=" bg-black h-[95dvh] w-[70vw]">
            <div className={menuTitleStyles}>What we do</div>
            <div className={menuLinkStyles}>Interior</div>
            <div className={menuLinkStyles}>Exterior</div>
            <div className={menuTitleStyles}>About Us</div>
            <div className={menuLinkStyles}>Company</div>
            <div className={menuLinkStyles}>Reviews</div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
