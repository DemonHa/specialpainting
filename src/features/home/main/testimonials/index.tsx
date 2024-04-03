/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const getInitial = (fullName: string) => {
  const name = fullName.split(" ");
  return [name[0][0], name[name.length - 1][0]].join("");
};

const Button = ({
  children,
  onClick,
  lastOne,
}: {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
  lastOne: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-10 h-10 rounded-full ${lastOne ? "bg-inherit border-2 border-white" : "bg-white"}  flex justify-center items-center cursor-pointer`}
    >
      {children}
    </div>
  );
};

const testimonials = [
  {
    name: "Astrid S.",
    location: "Santa Cruz, CA",
    job: "Paint or Stain Exterior Surfaces",
    title: "The whole team was great to work with from start to finish.",
    description:
      "The ease of getting a quote and then moving forward was good, the attention to detail and the willingness to go the extra mile was really nice. The whole team consists of family members and the team lead is thoughtful and concise. I would hire again with zero hesitation. We get so many compliments on the home and the quality of work, we always recommend our painters for work to others.",
  },
  {
    name: "Siamark S.",
    location: "Pompano Beach, FL",
    job: "Remodel or Renovate One or More Rooms",
    title: "First and most important great personality,",
    description:
      "then prompt responses, clean work, no errors, Great communication, fair pricing, could not ask for more.",
  },
  {
    name: "Sonam D.",
    location: "Bellevue, WA",
    job: "Paint Cabinets",
    title:
      "Kejdo and team did a great job in painting the kitchen cabinets of our house.",
    description:
      "They were originally cherry color in oak material, and we wanted them to be transformed to something brighter. Kejdo and team did an amazing job at painting them white, and everything from the color to shine to smoothness was perfect. They also seamlessly coordinated and supervised the work with the company that changed our kitchen countertops and backsplash. I also highly appreciate how Kejdo is very responsive and professional which makes working with him a very pleasant experience.",
  },
  {
    name: "Pat H.",
    location: "Edmonds, WA",
    job: "Paint or Stain Exterior Surfaces",
    title: "This company did a great job painting the exterior of my house.",
    description:
      "The original paint was in bad shape and they took time to properly pressure wash and prep the house before painting. They worked very quickly and were done much faster than I thought they would be. They also did a good job cleaning up the area after they were done. They were very professional and did a great job communicating with me.",
  },
  {
    name: "Kelly A.",
    location: "Bothell, WA",
    job: "Paint or Stain Exterior Surfaces",
    title: "I had a great experience working with Kejdo and team.",
    description:
      "Communicative, honest and detail oriented are all applicable to their work. They did a great job painting the exterior of my house, trim, door, etc. with ensuring that they pressure washed and prepped the house well prior to painting. They were quick and thorough. I had a great experience working with them.",
  },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);

  const testimonial = testimonials[page];

  return (
    <div className="dark:bg-darkJeans bg-indigo-500 px-6 pt-10 sm:pt-20 pb-10 flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-20 lg:gap-28 text-white">
      <div className="flex flex-col-reverse items-end sm:items-start sm:flex-col gap-5 sm:gap-14">
        <div className="flex flex-row sm:flex-col gap-3 w-[100%]">
          <div className="w-20 h-20 sm:w-44 sm:h-44 bg-background-white rounded-lg flex justify-center items-center">
            <div className="text-3xl sm:text-6xl text-gray-500">
              {getInitial(testimonial.name)}
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{testimonial.name}</div>
            <div>{testimonial.location}</div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            lastOne={page === 0}
            onClick={() => {
              setPage((prev) => Math.max(prev - 1, 0));
            }}
          >
            <BsArrowLeft
              className={`${page !== 0 ? "text-black" : "text-white"}`}
            />
          </Button>
          <Button
            lastOne={page === testimonials.length - 1}
            onClick={() => {
              setPage((prev) => Math.min(prev + 1, testimonials.length - 1));
            }}
          >
            <BsArrowRight
              className={`${page !== testimonials.length - 1 ? "text-black" : "text-white"}`}
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="font-bold text-2xl lg:text-4xl">
          “{testimonial.title}
        </div>
        <div className="text-lg font-semibold">{testimonial.description}”</div>
      </div>
    </div>
  );
};

export default Testimonials;
