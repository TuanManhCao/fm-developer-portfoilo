import React from "react";
import projectImage1 from "./assets/images/thumbnail-project-1-large.webp";
import projectImage2 from "./assets/images/thumbnail-project-2-large.webp";
import projectImage3 from "./assets/images/thumbnail-project-3-large.webp";
import projectImage4 from "./assets/images/thumbnail-project-4-large.webp";
import projectImage5 from "./assets/images/thumbnail-project-5-large.webp";
import projectImage6 from "./assets/images/thumbnail-project-6-large.webp";

import projectImage1Small from "./assets/images/thumbnail-project-1-small.webp";
import projectImage2Small from "./assets/images/thumbnail-project-2-small.webp";
import projectImage3Small from "./assets/images/thumbnail-project-3-small.webp";
import projectImage4Small from "./assets/images/thumbnail-project-4-small.webp";
import projectImage5Small from "./assets/images/thumbnail-project-5-small.webp";
import projectImage6Small from "./assets/images/thumbnail-project-6-small.webp";

export function ProjectSection() {
  return (
    <>
      <div className="mx-auto mt-20 flex flex-col gap-4 md:max-w-5xl xl:max-w-6xl">
        <div className="flex flex-row justify-between">
          <span className="inline-block items-center text-3xl md:text-5xl xl:text-8xl">
            Projects
          </span>
          <a
            href="#contact"
            className="text-center text-xl font-bold underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
          >
            Contact me{" "}
          </a>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 pb-10 md:grid-cols-2 md:pb-16">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="xl:relative">
        <img src={projectImage1Small} alt="" className="top-0 left-0 w-full" />
        <div className="xl:absolute xl:top-0 xl:left-0 xl:h-full xl:w-full">
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-black/75 opacity-0 hover:opacity-100 hover:transition-all">
            <a
              href="#contact"
              className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
            >
              View Project{" "}
            </a>
            <a
              href="#contact"
              className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
            >
              View Code{" "}
            </a>
          </div>
        </div>
      </div>
      <h3 className="text-2xl">Design Portfolio</h3>
      <div className="flex flex-row flex-wrap justify-start gap-4">
        <span className="uppercase text-tc-grey ">HTML</span>
        <span className="uppercase text-tc-grey ">HTML</span>
        <span className="uppercase text-tc-grey ">HTML</span>
      </div>
      <div className="flex flex-row gap-6 pt-4 xl:hidden">
        <a
          href="#contact"
          className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
        >
          View Project{" "}
        </a>
        <a
          href="#contact"
          className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
        >
          View Code{" "}
        </a>
      </div>
    </div>
  );
}
