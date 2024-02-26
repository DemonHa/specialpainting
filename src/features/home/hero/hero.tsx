"use client";

import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import AnimatedSlider from "./animated-slider";
import TextAnimationWrapper from "./text-animation";

const templates = [
  {
    title: "Built to scale",
    description:
      "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
    button: "Get an estimate",
    color: "bg-orange-500",
    hex: "#f97315",
  },
  {
    title: "AI innovation",
    description:
      "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
    button: "Read The Report",
    color: "bg-green-400",
    hex: "#49de80",
  },
  {
    title: "Expert software development",
    description:
      "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don't have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
    button: "Explore Services",
    color: "bg-fuchsia-400",
    hex: "#e979f9",
  },
  {
    title: "Exceptional customer service",
    description:
      "At Vention, unparalleled customer care isn't just a promise — it's our mission. We blend personalized experience, unwavering attention to detail, and a genuine passion for your business, ensuring that every aspect of our collaboration is tailored to your success.",
    button: "Schedule a call",
    color: "bg-indigo-600",
    hex: "#5046e5",
  },
];

const Hero = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((current) =>
        current === templates.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  const template = templates[page];

  return (
    <>
      <div className="grid grid-cols-[3fr_13fr] md:grid-cols-[4fr_14fr] lg:grid-cols-2 xl:grid-rows-[auto_max-content] lg:grid-rows-[280px_max-content] gap-0 p-5 md:pt-14 lg:pt-5">
        <div
          className={`flex flex-1 min-h-[200px] lg:min-h-[calc(143px+136*((100vw-1080px)/840))] items-center ${template.color}`}
        >
          <TextAnimationWrapper
            text={template.title}
            className="hidden lg:flex px-4 text-5xl xl:text-6xl"
          />
        </div>
        <div className="flex flex-1 lg:items-end justify-end lg:py-7">
          <div className="hidden lg:flex">
            <AnimatedSlider
              color={template.hex}
              activePage={page}
              setActivePage={setPage}
            />
          </div>
          <div className="flex flex-col min-h-[540px] md:min-h-[729px] pt-20 pb-8 pl-10 pr-5 md:pt-72 md:pl-32 md:pb-24 lg:hidden gap-4">
            <TextAnimationWrapper
              className="text-4xl sm:text-5xl"
              text={template.title}
            />
            <TextAnimationWrapper text={template.description} />
          </div>
        </div>
        <div>
          <div className="hidden lg:flex h-[100%]">
            <div className="flex-1"></div>
            <div className="flex-1 min-w-[350px] flex flex-col justify-end pr-10">
              <TextAnimationWrapper
                className="text-sm xl:text-lg"
                text={template.description}
              />
              <button
                className={`w-full ${template.color} mt-4 xl:mt-8 px-3 xl:px-6 py-2 xl:py-4 flex justify-between items-center`}
              >
                <TextAnimationWrapper
                  className="text-sm xl:text-2xl"
                  text={template.button}
                />
                <MdArrowOutward size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex-1">
            <img
              src="https://www.paintzen.com/wp-content/uploads/2019/10/paintzen-black-exterior-rowhouse-1.jpg"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0, 100% 62%, 67% 62%, 34% 100%, 16% 100%, 0 100%, 0% 43%, 0 0)",
              }}
            />
          </div>
          <div className="absolute bottom-0 right-0 lg:hidden">
            <AnimatedSlider
              color={template.hex}
              small
              activePage={page}
              setActivePage={setPage}
            />
          </div>
        </div>
      </div>
      <button
        className={`lg:hidden w-full ${template.color} px-3 py-6 flex justify-between items-center`}
      >
        <TextAnimationWrapper className="text-2xl" text={template.button} />
        <MdArrowOutward size={30} />
      </button>
    </>
  );
};

export default Hero;
