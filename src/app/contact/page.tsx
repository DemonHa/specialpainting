"use client";

import Image from "next/image";
import React, { useState } from "react";

import soapImage from "@/../../public/images/soap.webp";
import oneYearImage from "@/../../public/images/1year.webp";
import twentyReviewsImage from "@/../../public/images/20reviews.webp";
import eliteImage from "@/../../public/images/elite.webp";
import ssaImage from "@/../../public/images/ssa-2023.webp";
import topRatedImage from "@/../../public/images/toprated.webp";
import { MdArrowOutward } from "react-icons/md";
import { sendEmail } from "@/features/home/footer/contact/actions";
import { useToast } from "@/components/toast";

const images = [
  soapImage,
  topRatedImage,
  eliteImage,
  ssaImage,
  oneYearImage,
  twentyReviewsImage,
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await sendEmail({
      subject: `Website contact form email`,
      text: `Email from: ${email}\nName: ${name}\nPhone number: ${phone}\nDetails: ${text}\n\nPlease do not repply to this email! The reply is not forwarded to the sender. This email was sent by an automated system.`,
    });
    if (!response.ok) {
      return addToast({
        type: "error",
        description:
          "Something went wrong while sending the email! Please try again later...",
      });
    }

    addToast({ type: "info", description: "Email sent successfully!" });
    setName("");
    setEmail("");
    setPhone("");
    setText("");
    setIsLoading(false);
  };

  return (
    <div>
      <div className="grid grid-rows-[auto_auto] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 lg:border-r lg:border-b border-gray-300 dark:border-slate-700">
          <div className="px-4 lg:px-6 pt-10 pb-28 lg:pb-0 text-4xl xl:text-5xl font-medium w-full md:w-[80%] lg:w-full">
            With us, you get the dedication of an in-house team with the proven
            expertise of a tech industry leader.
          </div>
          <div className="px-6 pb-6 text-md hidden lg:flex">
            Our valued clients include:
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-300 dark:divide-slate-700 border-0 lg:border-b border-gray-300 dark:border-slate-700">
          <div className="text-xl px-4 lg:px-6 py-12">Get in touch</div>
          <input
            className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 placeholder:text-black dark:placeholder:text-white"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-inherit h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="w-full bg-inherit h-36 resize-none focus:outline-none py-5 px-5 min-md:px-8 placeholder:text-black dark:placeholder:text-white"
            placeholder="How can we help you?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <div className="px-4 pt-24 pb-6 text-md flex lg:hidden font-thin border-b border-gray-300 dark:border-slate-700">
            Our valued clients include:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`flex py-10 lg:py-5 justify-center border-b border-gray-300 dark:border-slate-700 lg:border-r ${index % 2 === 0 || index === 0 ? "max-lg:border-r" : ""}`}
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
        </div>
        <div className="flex flex-col gap-4 p-0 lg:p-6 row-start-3 lg:row-auto lg:border-b border-gray-300 dark:border-slate-700">
          <div className="text-sm p-6 pl-4 lg:p-0 pb-0">
            Fill the fields above and click send, we will respond as soon as
            possible via emial or phone call.
          </div>
          <button
            className="w-full flex justify-between items-center px-4 py-6 lg:p-8 min-md:px-7 bg-indigo-600 hover:bg-indigo-400 text-white"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <div className="text-xl lg:text-2xl">Submit</div>{" "}
            <MdArrowOutward size={34} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
        <div className="hidden md:flex"></div>
        <div className="flex flex-col gap-12 px-8 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col gap-4">
            <div className="text-md lg:text-lg">
              Prefer email? You can also reach us at:
            </div>
            <div className="text-2xl lg:text-4xl underline">
              hello@ventionteams.com
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-md lg:text-lg">Want to join our team?</div>
            <div className="text-2xl lg:text-4xl underline">
              careers@specialpainting.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
