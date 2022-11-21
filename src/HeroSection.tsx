import React from "react";
import profileImageLg from "./assets/images/image-profile-desktop.webp";

import profileImageMd from "./assets/images/image-profile-tablet.webp";

import profileImageSm from "./assets/images/image-profile-mobile.webp";

import ringImage from "./assets/images/pattern-rings.svg";
import circleImage from "./assets/images/pattern-circle.svg";

// "src/assets/images/pattern-circle.svg";
export default function HeroSection() {
  return (
    <div className="relative mx-auto pb-20 md:flex md:max-w-5xl md:flex-row items-center xl:max-w-6xl">
      <img
        src={ringImage}
        alt=""
        className="absolute top-40 -left-40 z-10 opacity-50 md:top-0 md:-left-64"
      />
      <img
        src={circleImage}
        alt=""
        className="absolute -right-24 z-30 md:bottom-20 md:-right-20"
      />
      <div className="relative z-20 md:order-2">
        <img
          src={profileImageSm}
          alt="Adam keyes profile image black and white"
          className="mx-auto -mt-40 block w-44 object-cover object-bottom md:hidden "
        />
        <img
          src={profileImageMd}
          alt="Adam keyes profile image black and white"
          className="hidden md:block xl:hidden"
        />
        <img
          src={profileImageLg}
          alt="Adam keyes profile image black and white"
          className="hidden xl:block"
        />
      </div>
      <div className="flex flex-col items-center gap-4  text-center text-white md:order-1 md:items-start md:text-left">
        <h1 className="text-4xl md:text-[72px] md:leading-none md:tracking-tight xl:text-8xl">
          Nice to meet you! I’m{" "}
          <span className="underline decoration-tc-green underline-offset-8">
            Adam Keyes.
          </span>
        </h1>
        <p className="py-6  text-lg font-medium leading-7 max-w-md">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a
          href="#contact"
          className="text-2xl font-bold underline decoration-tc-green decoration-4 underline-offset-[16px] hover:text-tc-green md:text-left"
        >
          Contact me{" "}
        </a>
      </div>
    </div>
  );
}
