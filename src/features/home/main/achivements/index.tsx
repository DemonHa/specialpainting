import React from "react";
import Image from "next/image";
import soapImage from "@/../../public/images/soap.webp";
import oneYearImage from "@/../../public/images/1year.webp";
import twentyReviewsImage from "@/../../public/images/20reviews.webp";
import eliteImage from "@/../../public/images/elite.webp";
import ssaImage from "@/../../public/images/ssa-2023.webp";
import topRatedImage from "@/../../public/images/toprated.webp";
import { Header } from "./header";

const images = [
  soapImage,
  topRatedImage,
  eliteImage,
  ssaImage,
  oneYearImage,
  twentyReviewsImage,
];

const Achivements = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`flex py-10  justify-center border-b border-gray-300 dark:border-slate-700 lg:border-r ${index % 2 === 0 || index === 0 ? "max-lg:border-r" : ""}`}
            >
              <Image
                className="w-[120px] h-[120px] grayscale object-contain"
                priority={false}
                src={image}
                alt={"achievement-img"}
              />
            </div>
          );
        })}
        <div className="flex py-10  justify-center" />
      </div>
    </div>
  );
};

export default Achivements;
