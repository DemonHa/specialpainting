"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavBarLink from "./nav-bar-link";
import { MdArrowOutward } from "react-icons/md";
import AnimatedMenuButton from "./animated-menu-button";
import { motion, AnimatePresence } from "framer-motion";
import { smallMenuData, bigMenuData } from "./utils/menu-data";
import useSmallScreenMenuHeight from "./utils/use-small-screen-menu-height";
import ThemeSwitcher from "../theme-switcher";
import Image from "next/image";

const menuTitleStyles =
  "h-[6rem] flex justify-start items-end py-3 px-7 text-lg border-b border-gray-300 dark:border-slate-700";
const menuLinkStyles =
  "h-[4rem] flex justify-between items-end py-3 px-7 text-xl font-semibold border-b border-gray-300 dark:border-slate-700 text-black dark:text-orange-300 cursor-pointer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const smallMenuHeight = useSmallScreenMenuHeight(4 * 16);

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
    <div className="sticky top-0 bg-inherit z-20">
      <div className="flex justify-between w-full border-b border-gray-300 dark:border-slate-700 divide-x divide-gray-300 dark:divide-slate-700 h-[4rem]">
        <div className="flex-1 flex items-center px-5">
          <Link href="/">
            <Image
              src="/images/logo-black.png"
              className="block dark:hidden"
              alt="Dark Logo"
              width={80}
              height={80}
            />
            <Image
              src="/images/logo-white.png"
              className="hidden dark:block"
              alt="Dark Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="flex xl:hidden border-l border-gray-300 dark:border-slate-700 min-w-[50px]:">
          <AnimatedMenuButton setOpen={setOpen} open={open} />
        </div>
        {/* menu for big screens */}
        <div className="hidden xl:flex justify-between text-xl w-[65vw]">
          {bigMenuData.map((item, index) => (
            <NavBarLink
              key={index}
              text={item.label}
              link={item.link}
              filled={item.filled}
            />
          ))}
        </div>
      </div>
      {/* menu for small screens */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: smallMenuHeight }} // Apply dynamic height for animation
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Keep your transition, but it won't affect real-time resizing
            className="z-10 absolute w-full overflow-hidden overflow-y-auto top-[4rem] flex xl:hidden"
            style={{ height: smallMenuHeight }} // Directly apply dynamic height for real-time updates
          >
            <div
              className="w-[30vw] bg-glass-bg bg-opacity-35 shadow-glass backdrop-blur-glass border border-glass-border min-h-[35rem]"
              style={{ height: smallMenuHeight }}
            ></div>
            <div className="absolute left-4 bottom-2">
              <ThemeSwitcher filled />
            </div>
            <div
              className="z-10 bg-background-white dark:bg-background-dark flex flex-col justify-between w-[70vw]  min-h-[35rem]"
              style={{ height: smallMenuHeight }}
            >
              <div>
                {smallMenuData.map((item, index) => {
                  if (item.isTitle) {
                    return (
                      <div key={index} className={menuTitleStyles}>
                        {item.label}
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        onClick={() => {
                          setOpen((prev) => !prev);
                        }}
                        href={item.link}
                      >
                        <div className={menuLinkStyles}>
                         <div>{item.label}</div>
                         <div><MdArrowOutward size={34} /></div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
              {/* Fixed Button at the Bottom */}
              <Link
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                href="contact"
                className="px-6 py-3 bg-orange-500 mt-auto w-[70vw] flex justify-between items-center"
              >
                <div className="text-xl font-semibold m-2">Contact Us</div>
                <MdArrowOutward size={34} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
