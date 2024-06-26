import React from "react";
import ThemeSwitcher from "../theme-switcher";
import Image from "next/image";

const GeneralFooter = () => {
  return (
    <div className="flex relative z-10 max-lg:flex-col-reverse max-lg:divide-y bg-background-dark dark:bg-background-white divide-x dark:divide-gray-300 divide-slate-700 dark:text-black text-white min-h-fit">
      <div className=" w-[100px] min-w-[100px] h-[100px] max-lg:hidden" />
      <div className="hidden max-md:flex items-center justify-center py-4 space-x-3">
        <ThemeSwitcher />
        <div className="font-semibold">Dark mode</div>
      </div>
      <div className="hidden max-lg:flex justify-between items-center px-5 py-7">
        <div className="max-md:ml-auto max-md:mr-auto">
          © 2022. Special Painting LLC All Rights Reserved.
        </div>
        <div className="flex items-center space-x-3 max-md:hidden">
          <ThemeSwitcher />
          <div className="font-semibold">Dark mode</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between py-7 px-8 w-full">
        <div className="flex items-center space-x-3 max-lg:hidden">
          <ThemeSwitcher />
          <div className="font-semibold">Dark mode</div>
        </div>
        {/* <div className="text-7xl text-bold max-lg:ml-auto max-lg:mr-auto max-lg:my-10">
          Vention
        </div> */}
        <Image
          src="/images/logo-black.png"
          className="hidden dark:block"
          alt="Dark Logo"
          width={140}
          height={140}
        />
        <Image
          src="/images/logo-white.png"
          className="block dark:hidden"
          alt="Dark Logo"
          width={140}
          height={140}
        />
      </div>
      <div className="flex flex-col justify-around min-h-[17rem] items-center min-w-[40vw] ">
        <div className="flex justify-around items-center w-full">
          <div className="flex flex-col space-y-3 items-start">
            <a
              href="https://instagram.com/specialpainting.llc?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/specialpaintingLLC?mibextid=ZbWKwL"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/0012069105493?text=Hello%2C%20I%20am%20interested%20in%20working%20with%20you!"
              target="_blank"
            >
              Whatsapp
            </a>
            <a
              href="https://www.homeadvisor.com/rated.SpecialPaintingand.122036015.html"
              target="_blank"
            >
              Home Advisor
            </a>
          </div>
          <div className="flex flex-col space-y-5 w-[25ch] justify-start ">
            <div>US: 206-910-5493</div>
            <div>4203 216th St SW</div>
            <div>Mountlake Terrace, WA 98043</div>
          </div>
        </div>
        <div className="max-lg:hidden">
          © 2022. Special Painting LLC All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
