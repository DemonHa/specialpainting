"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavBarLink from "./nav-bar-link";
import AnimatedMenuButton from "./animated-menu-button";
import { MdArrowOutward } from "react-icons/md";

const menuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100dvh", // Target height for the open state
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const menuTitleStyles =
  "h-[15vh] flex justify-start items-end py-3 px-7 text-2xl border-b border-slate-700";
const menuLinkStyles =
  "h-[10vh] flex justify-start items-end py-3 px-7 text-2xl border-b border-slate-700 text-orange-300 cursor-pointer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional: Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div className="flex justify-between w-full border-b border-slate-700 divide-x divide-slate-700 z-20 h-[7dvh] md:h-[7dvh] sm:h-[7dvh] lg:h-[7dvh] xl:h-[8dvh]">
        <div className="flex-1 flex items-center">
          <Link href="/">
            <div className="p-5 text-xl">VENTION</div>
          </Link>
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
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="z-10 absolute w-full overflow-hidden flex xl:hidden"
            style={{ top: "7dvh" }} // Adjust accordingly
          >
            <div className="w-[30vw] h-[93dvh] bg-glass-bg bg-opacity-35 shadow-glass backdrop-blur-glass border border-glass-border"></div>
            <div className="bg-black flex flex-col justify-between h-[93dvh] w-[70vw]">
              <div>
                {/* Content goes here */}
                <div className={menuTitleStyles}>What we do</div>
                <Link
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  href="portfolio"
                >
                  <div className={menuLinkStyles}>Portfolio</div>
                </Link>
                <Link
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  href="what-we-do"
                >
                  <div className={menuLinkStyles}>Our Work</div>
                </Link>
                <div className={menuTitleStyles}>About Us</div>
                <Link
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  href="about-us"
                >
                  <div className={menuLinkStyles}>Reviews</div>
                </Link>
                <Link
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  href="insights"
                >
                  <div className={menuLinkStyles}>Insights</div>
                </Link>
              </div>
              {/* Fixed Button at the Bottom */}
              <Link
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                href="contact"
                className="px-7 py-3 bg-orange-500 mt-auto w-full flex justify-between items-center"
              >
                <div className="text-3xl m-2">Contact Us</div>
                <MdArrowOutward size={40} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
