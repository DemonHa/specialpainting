/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import AnimatedSlider from "./animated-slider";
import TextAnimationWrapper from "./text-animation";
import Link from "next/link";

const yearExp = (): number => {
  const currentYear: number = new Date().getFullYear();
  const difference: number = currentYear - 2022;
  return difference;
};

const templates = [
  {
    title: "Trusted and Experienced",
    description:
      "With " +
      yearExp() +
      "+ years of HomeAdvisor-approved experience, Special Painting and Contracting LLC is a top-rated Elite Service Professional. Our licenses, awards, and satisfied reviews attest to our quality work and customer satisfaction, whether it's residential or commercial projects.",
    button: "Explore Services",
    link: "/what-we-do",
    color: "bg-orange-500",
    hex: "#f97315",
    textColor: "text-black dark:text-white",
  },
  {
    title: "Professionalism and Expertise",
    description:
      "At Special Painting and Contracting LLC, professionalism and expertise define our approach. Our team specializes in residential, commercial painting, and power washing. Our verified licenses and Seal of Approval ensure top-notch service and attention to detail.",
    button: "Get in touch",
    link: "/contact",
    color: "bg-green-400",
    hex: "#49de80",
    textColor: "text-black dark:text-white",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Special Painting and Contracting LLC prioritizes customer satisfaction. With 20+ homeowner reviews and 5-star ratings, our customer-centric approach and quality service speak for themselves. Experience excellence with us.",
    button: "Our work",
    link: "/what-we-do",
    color: "bg-fuchsia-400",
    hex: "#e979f9",
    textColor: "text-black dark:text-white",
  },
  {
    title: "Positive Feedback",
    description:
      "Special Painting and Contracting LLC offers comprehensive painting and contracting services. From exterior paint to power washing, we deliver quality work across Seattle, Bellevue, and more. Our 100% recommendations and positive feedback highlight our commitment to quality and fair pricing.",
    button: "Schedule a call",
    link: "/contact",
    color: "bg-indigo-600 text-white",
    hex: "#5046e5",
    textColor: "text-black dark:text-white",
  },
];

const Hero = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((current) =>
        current === templates.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  const template = templates[page];

  return (
    <>
      <div className="grid grid-cols-[3fr_13fr] md:grid-cols-[4fr_14fr] lg:grid-cols-2 xl:grid-rows-[auto_max-content] lg:grid-rows-[280px_max-content] gap-0 p-5 md:pt-14 lg:pt-5">
        <div
          className={`flex flex-1 min-h-[200px] lg:min-h-[calc(143px+136*((100vw-1080px)/840))] items-center ${template.color} ${template.textColor}`}
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
              <Link
                href={template.link}
                className={`w-full ${template.color} ${template.textColor} mt-4 xl:mt-8 px-3 xl:px-6 py-2 xl:py-4 flex justify-between items-center`}
              >
                <TextAnimationWrapper
                  className="text-sm xl:text-xl"
                  text={template.button}
                />
                <MdArrowOutward size={30} />
              </Link>
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
              alt=""
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
      <Link
        href={template.link}
        className={`lg:hidden w-full ${template.color} ${template.textColor} px-3 py-6 flex justify-between items-center`}
      >
        <TextAnimationWrapper className="text-2xl" text={template.button} />
        <MdArrowOutward size={30} />
      </Link>
    </>
  );
};

export default Hero;
