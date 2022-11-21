import React from "react";
import ringImage from "./assets/images/pattern-rings.svg";
export default function ContactSection() {
  return (
    <div className="relative mx-auto bg-tc-dark-grey md:max-w-5xl xl:flex xl:max-w-6xl xl:flex-row xl:justify-between ">
      <div className="mx-auto flex max-w-lg flex-col gap-4  xl:mx-0">
        <h2 className="mt-16 text-center text-4xl xl:mt-0 xl:text-left xl:text-8xl">
          Contact
        </h2>
        <p className="mb-8 text-center text-base md:px-4 md:text-lg md:leading-7 xl:px-0 xl:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <img
        src={ringImage}
        alt=""
        className="absolute bottom-1 -left-48 z-0 opacity-25"
      />
      <div className="relative z-10">
        <form action="">
          <div className="mx-auto flex max-w-lg flex-col items-end gap-8 xl:w-[445px]">
            <input
              type="text"
              placeholder="NAME"
              className="h-12 w-full border-b-2 bg-transparent pl-6 placeholder-tc-grey focus:outline-none"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="h-12 w-full border-b-2 bg-transparent pl-6 placeholder-tc-grey  focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="w-full resize-none border-b-2 bg-transparent pl-6 leading-6 placeholder-tc-grey focus:outline-none "
              placeholder="MESSAGE"
            />
            <button
              type="submit"
              className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
