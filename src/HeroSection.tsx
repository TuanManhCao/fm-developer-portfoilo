import React from "react";
import profileImageLg from "./assets/images/image-profile-desktop.webp";

import profileImageMd from "./assets/images/image-profile-tablet.webp";

import profileImageSm from "./assets/images/image-profile-mobile.webp";

export default function HeroSection() {
  return (
    <div className="pb-20">
      <div>
        <img
          src={profileImageSm}
          alt="Adam keyes profile image black and white"
          className="mx-auto block w-44 sm:hidden -mt-32 object-bottom object-cover "
        />
        <img
          src={profileImageMd}
          alt="Adam keyes profile image black and white"
          className="hidden sm:block lg:hidden"
        />
        <img
          src={profileImageLg}
          alt="Adam keyes profile image black and white"
          className="hidden lg:block"
        />
      </div>
      <div className="flex flex-col items-center gap-4  text-white">
        <h1 className="text-center text-4xl">
          Nice to meet you! I’m{" "}
          <span className="underline decoration-tc-green underline-offset-8">
            Adam Keyes.
          </span>
        </h1>
        <p className="py-6 text-center text-base font-medium leading-7">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a
          href="#contact"
          className="text-center text-2xl font-bold underline decoration-tc-green decoration-4 underline-offset-[16px] hover:text-tc-green"
        >
          Contact me{" "}
        </a>
      </div>
    </div>
  );
}
