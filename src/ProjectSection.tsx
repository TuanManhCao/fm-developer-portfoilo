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

type Project = {
  imageSrcSm: string;
  imageSrcLg: string;
  title: string;
  skills: string[];
};

const projects: Project[] = [
  {
    imageSrcSm: projectImage1Small,
    imageSrcLg: projectImage1,
    title: "Design Portfolio",
    skills: ["HTML", "CSS"],
  },
  {
    imageSrcSm: projectImage2Small,
    imageSrcLg: projectImage2,
    title: "E-learning Landing page",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    imageSrcSm: projectImage3Small,
    imageSrcLg: projectImage3,
    title: "Todo web app",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    imageSrcSm: projectImage4Small,
    imageSrcLg: projectImage4,
    title: "Entertainment web app",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    imageSrcSm: projectImage5Small,
    imageSrcLg: projectImage5,
    title: "Memory Games",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    imageSrcSm: projectImage6Small,
    imageSrcLg: projectImage6,
    title: "Art gallery showcase",
    skills: ["HTML", "CSS", "Javascript"],
  },
];

export function ProjectSection() {
  return (
    <>
      <div className="mx-auto mt-20 flex flex-col gap-4 md:max-w-5xl xl:max-w-6xl">
        <div className="flex flex-row items-center justify-between pb-4 md:pb-6 xl:pb-20">
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
          {projects.map(aProject => {
            return <ProjectCard key={aProject.title} title={aProject.title} imageSrcLg = {aProject.imageSrcLg} imageSrcSm = {aProject.imageSrcSm} skills = {aProject.skills} />
          })}
        </div>
      </div>
    </>
  );
}



export function ProjectCard({ imageSrcSm, imageSrcLg, title, skills } : Project) {
  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="xl:relative">
        <img src={imageSrcSm} alt="" className="top-0 left-0 w-full" />
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
      <h3 className="text-2xl">{title}</h3>
      <div className="flex flex-row flex-wrap justify-start gap-4">
        { skills.length > 0 ? skills.map((aSkill, index) => {
          return (
            <span key={index} className="uppercase text-tc-grey ">
              {aSkill}
            </span>
          );
        
        }) :<></> }
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
