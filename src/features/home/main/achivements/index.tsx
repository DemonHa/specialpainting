import React from "react";
import Image from "next/image";
import photo from "../../../../../public/photo.png";

const images = [photo, photo, photo, photo, photo, photo];

const Achivements = () => {
  return (
    <div className="grid grid-cols-4">
      {images.map((image, idx) => {
        return (
          <div
            key={idx}
            className="flex py-5 border border-slate-700 justify-center"
          >
            <Image
              width={120}
              height={120}
              src={image}
              alt={"achievement-img"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Achivements;
