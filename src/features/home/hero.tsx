"use client";

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const template = [
  {
    title: "Built to scale",
    description:
      "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
    button: "Get an estimate",
  },
];

const Hero = () => {
  const [page, setPage] = useState(0);

  const temp = template[page];

  return (
    <div className="flex flex-col h-[90vh] p-7">
      <div className="flex min-h-[30vh]">
        <div className="flex flex-1 items-center bg-red-600">
          <div className="px-4 text-5xl">{temp.title}</div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-lg">{temp.description}</div>
            <button className="w-full bg-yellow-600 mt-8 px-5 py-3 flex justify-between items-center">
              <div>{temp.button}</div>
              <MdArrowOutward size={30} />
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;
