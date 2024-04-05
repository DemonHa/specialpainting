"use client";

import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { sendEmail } from "./actions";
import { useToast } from "@/components/toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = async () => {
    if ((name !== "" && email !== "" && text !== "") == false) {
      addToast({
        type: "error",
        description: "Please fill all the fileds that are required!",
      });
      return;
    }

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
    <div className="flex divide-x divide-gray-300 dark:divide-slate-700">
      <div className="flex-col flex-1 flex justify-end  h-[40rem]">
        <div className="ml-8 text-5xl font-semibold mb-12 max-md:ml-5 max-md:mb-10">
          Contact us
        </div>
        <div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 border-y border-gray-300 dark:border-slate-700">
            <input
              className="bg-inherit border-b border-r max-md:border-r-0 border-gray-300 dark:border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 placeholder:text-black dark:placeholder:text-white"
              placeholder="Full name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-inherit border-b border-gray-300 dark:border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-inherit border-r max-md:border-r-0 border-gray-300 dark:border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14  placeholder:text-black dark:placeholder:text-white"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-end">
            <textarea
              className="w-full bg-inherit border-b border-gray-300 dark:border-slate-700 h-48 resize-none focus:outline-none py-5 px-5 min-md:px-8 max-lg:h-20  placeholder:text-black dark:placeholder:text-white"
              placeholder="How can we help you?*"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-between w-full items-center py-4 lg:py-0">
              <div className="min-md:ml-8 text-sm ml-5">
                Fill the fields above and click send, we will respond as soon as
                possible via emial or phone call.
              </div>
              <div className="h-[4rem] min-w-[15vw] bg-indigo-600 hidden lg:flex" />
            </div>
          </div>
        </div>
        <button
          className="h-[5rem] w-full flex justify-between items-center px-5 min-md:px-7 bg-indigo-600 hover:bg-indigo-400 lg:hidden text-white"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <div className="text-xl font-bold">Send</div>{" "}
          <MdArrowOutward size={34} />
        </button>
      </div>
      <div className="flex-col hidden justify-end lg:flex">
        <button
          className="h-[10rem] min-w-[20vw] bg-indigo-600 text-2xl font-semibold hover:bg-indigo-400 text-white"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Send
        </button>
        <div className="h-[4rem] w-[25vw] bg-inherit" />
      </div>
    </div>
  );
};

export default Contact;
