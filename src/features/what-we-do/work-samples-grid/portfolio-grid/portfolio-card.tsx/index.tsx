import React from "react";
import { Portfolio } from "..";
import AnimatedBox from "./animatedBox";

const PortfolioCard = ({
  portfolio,
  gridView,
  index,
}: {
  portfolio: Portfolio;
  gridView: boolean;
  index: number;
}) => {
  const { title, subTitle, imgBefore, imgAfter } = portfolio;

  const flexDirection = index % 2 !== 0 ? "flex-row-reverse" : "";
  const leftPadding = index % 2 !== 0 ? "" : " pl-16";

  return (
    <div
      className={`flex ${gridView ? "flex-col px-8 py-5" : flexDirection + "flex-row-reverse justify-between px-10 py-14"} border-b dark:border-slate-700 border-gray-300 max-sm:px-2`}
    >
      <div
        className={`flex justify-between items-start h-[7rem] py-5 max-sm:flex-col ${!gridView && "flex-1 flex-col space-y-4" + leftPadding}`}
      >
        <div
          className={`text-4xl font-normal max-lg:text-2xl ${!gridView && "min-sm:text-5xl"}`}
        >
          {title}
        </div>
        <div
          className={`text-xl font-thin w-[15ch] max-sm:w-full max-lg:text-base ${!gridView && "min-sm:text-3xl"}`}
        >
          {subTitle}
        </div>
      </div>
      <div
        className={`${gridView ? "h-[30rem] max-lg:h-[20rem]" : "min-md:h-[28rem] min-md:min-w-[40rem] h-[30rem] min-w-[30rem]"} overflow-hidden flex flex-1 justify-center items-center max-sm:h-[15rem]`}
      >
        <AnimatedBox imageBefore={imgBefore} imageAfter={imgAfter} />
      </div>
    </div>
  );
};

export default PortfolioCard;
