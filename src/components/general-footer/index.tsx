import React from "react";
import ThemeSwitcher from "../theme-switcher";

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
        <div className="text-7xl text-bold max-lg:ml-auto max-lg:mr-auto max-lg:my-10">
          Vention
        </div>
      </div>
      <div className="flex flex-col justify-around min-h-[17rem] items-center min-w-[40vw] ">
        <div className="flex justify-around items-center w-full">
          <div className="flex flex-col space-y-3 items-start">
            <div>LinkedIn</div>
            <div>Instagram</div>
            <div>X / Twitter</div>
            <div>Youtube</div>
          </div>
          <div className="flex flex-col space-y-5 w-[25ch] justify-start ">
            <div>US: +1 (718) 374-5043</div>
            <div>575 Lexington Avenue, 14th Floor</div>
            <div>New York, NY 10022</div>
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
