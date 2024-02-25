"use client";

import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import AnimatedSlider from "./animated-slider";

const template = [
  {
    title: "Built to scale",
    description:
      "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
    button: "Get an estimate",
  },
  {
    title: "AI innovation",
    description:
      "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
    button: "Read The Report",
  },
  {
    title: "Expert software development",
    description:
      "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don't have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
    button: "Explore Services",
  },
  {
    title: "Exceptional customer service",
    description:
      "At Vention, unparalleled customer care isn't just a promise — it's our mission. We blend personalized experience, unwavering attention to detail, and a genuine passion for your business, ensuring that every aspect of our collaboration is tailored to your success.",
    button: "Schedule a call",
  },
];

const Hero = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((current) => (current === template.length - 1 ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const temp = template[page];

  return (
    <>
      <div className="grid grid-cols-[3fr_13fr] md:grid-cols-[4fr_14fr] lg:grid-cols-2 grid-rows-[auto_max-content] gap-0 p-5 md:pt-14 lg:pt-5">
        <div className="flex flex-1 min-h-[200px] lg:min-h-[calc(143px+136*((100vw-1080px)/840))] items-center bg-red-600">
          <div className="hidden lg:flex px-4 text-6xl">{temp.title}</div>
        </div>
        <div className="flex flex-1 lg:items-end justify-end lg:py-7">
          <div className="hidden lg:flex">
            <AnimatedSlider activePage={page} />
          </div>
          <div className="flex flex-col min-h-[540px] md:min-h-[729px] pt-20 pb-8 pl-10 pr-5 md:pt-72 md:pl-32 md:pb-24 lg:hidden gap-4">
            <div className="text-4xl sm:text-5xl">{temp.title}</div>
            <div>{temp.description}</div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex h-[100%]">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col justify-end pr-10">
              <div className="text-lg">{temp.description}</div>
              <button className="w-full bg-red-600 mt-8 px-6 py-4 flex justify-between items-center">
                <div className="text-2xl">{temp.button}</div>
                <MdArrowOutward size={30} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-1">
            <img
              src="https://www.paintzen.com/wp-content/uploads/2019/10/paintzen-black-exterior-rowhouse-1.jpg"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0, 100% 62%, 67% 62%, 34% 100%, 16% 100%, 0 100%, 0% 43%, 0 0)",
              }}
            />
          </div>
        </div>
      </div>
      <button className="lg:hidden w-full bg-red-600 px-3 py-6 flex justify-between items-center">
        <div className="text-2xl">{temp.button}</div>
        <MdArrowOutward size={30} />
      </button>
    </>
  );
};

export default Hero;
