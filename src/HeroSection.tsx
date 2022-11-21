import React from "react";
import profileImageLg from "./assets/images/image-profile-desktop.webp";

import profileImageMd from "./assets/images/image-profile-tablet.webp";

import profileImageSm from "./assets/images/image-profile-mobile.webp";

import ringImage from './assets/images/pattern-rings.svg'
import circleImage from "./assets/images/pattern-circle.svg";

// "src/assets/images/pattern-circle.svg";
export default function HeroSection() {
  return (
    <div className="relative pb-20">
      <img src={ringImage} alt="" className="absolute top-40 -left-40 z-10 opacity-50" />
      <img src={circleImage} alt="" className="absolute top-64 -right-24 z-20" />
      <div className="relative z-20 ">
        <img
          src={profileImageSm}
          alt="Adam keyes profile image black and white"
          className="mx-auto -mt-40 block w-44 object-cover object-bottom sm:hidden "
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
