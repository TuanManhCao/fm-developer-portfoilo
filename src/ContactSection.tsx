import React from "react";

export default function ContactSection() {
  return (
    <div>
      <div>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div>
        <form action="">
          <div className="flex flex-col items-end gap-8">
            <input
              type="text"
              placeholder="NAME"
              className="h-12 w-full  border-b-2 bg-transparent pl-6 placeholder-tc-grey"
            />
            <input
              type="text"
              placeholder="NAME"
              className="h-12 w-full  border-b-2 bg-transparent pl-6 placeholder-tc-grey"
            />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="w-full resize-none border-b-2 bg-transparent pl-6 leading-6 placeholder-tc-grey "
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