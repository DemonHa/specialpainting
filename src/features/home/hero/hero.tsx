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
  }, [template.length]);

  const temp = template[page];

  return (
    <div className="flex flex-col min-h-[80vh] p-7 pb-[5rem]">
      <div className="flex min-h-[35vh]">
        <div className="flex flex-1 items-center py-15 bg-red-600">
          <div className="px-4 text-7xl">{temp.title}</div>
        </div>
        <div className="flex flex-1 items-end justify-end py-7">
          <AnimatedSlider activePage={page} />
        </div>
      </div>
      <div className="flex flex-1 ">
        <div className="flex flex-1">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col justify-end pr-10">
            <div className="text-lg">{temp.description}</div>
            <button className="w-full bg-red-600 mt-8 px-5 py-3 flex justify-between items-center">
              <div className="text-3xl m-2">{temp.button}</div>
              <MdArrowOutward size={30} />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://www.paintzen.com/wp-content/uploads/2019/10/paintzen-black-exterior-rowhouse-1.jpg" style={{clipPath: "polygon(50% 0%, 100% 0, 100% 62%, 67% 62%, 34% 100%, 16% 100%, 0 100%, 0% 43%, 0 0)"}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
