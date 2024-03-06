import Image from "next/image";
import React from "react";

import soapImage from "@/../../public/images/soap.webp";
import oneYearImage from "@/../../public/images/1year.webp";
import twentyReviewsImage from "@/../../public/images/20reviews.webp";
import eliteImage from "@/../../public/images/elite.webp";
import ssaImage from "@/../../public/images/ssa-2023.webp";
import topRatedImage from "@/../../public/images/toprated.webp";
import { MdArrowOutward } from "react-icons/md";

const images = [
  soapImage,
  topRatedImage,
  eliteImage,
  ssaImage,
  oneYearImage,
  twentyReviewsImage,
];

export default function Contact() {
  return (
    <div className="grid grid-rows-[auto_auto] grid-cols-2">
      <div className="flex flex-col justify-between gap-10 border-r border-b border-gray-300 dark:border-slate-700">
        <div className="px-6 pt-10 text-5xl font-medium">
          With us, you get the dedication of an in-house team with the proven
          expertise of a tech industry leader.
        </div>
        <div className="px-6 pb-6 text-md">Our valued clients include:</div>
      </div>
      <div className="flex flex-col divide-y divide-gray-300 dark:divide-slate-700 border-b border-gray-300 dark:border-slate-700">
        <div className="text-xl px-6 py-12">Get in touch</div>
        <input
          className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 placeholder:text-black dark:placeholder:text-white"
          placeholder="Full name"
        />
        <input
          className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
          placeholder="Email"
        />
        <input
          className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
          placeholder="Phone (optional)"
        />
        <textarea
          className="w-full bg-inherit h-36 resize-none focus:outline-none py-5 px-5 min-md:px-8 max-lg:h-20  placeholder:text-black dark:placeholder:text-white"
          placeholder="How can we help you?"
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`flex py-5  justify-center border-b border-gray-300 dark:border-slate-700 lg:border-r ${index % 2 === 0 || index === 0 ? "max-lg:border-r" : ""}`}
            >
              <Image
                className="w-[100px] h-[100px] grayscale object-contain"
                priority={false}
                src={image}
                alt={"achievement-img"}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="text-sm">
          Fill the fields above and click send, we will respond as soon as
          possible via emial or phone call.
        </div>
        <button className="w-full flex justify-between items-center px-8 py-8 min-md:px-7 bg-indigo-600 hover:bg-indigo-400 text-white">
          <div className="text-2xl">Submit</div> <MdArrowOutward size={34} />
        </button>
      </div>
    </div>
  );
}
