import React from "react";
import ringImage from "./assets/images/pattern-rings.svg";
export default function ContactSection() {
  return (
    <div className="relative mx-auto bg-tc-dark-grey md:max-w-5xl">
      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        <h2 className="mt-16 text-center text-4xl">Contact</h2>
        <p className="mb-8 text-center text-base md:text-lg md:leading-7 md:px-4">
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
          <div className="flex flex-col items-end gap-8 max-w-lg mx-auto">
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
