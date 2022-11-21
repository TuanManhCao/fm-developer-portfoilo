import React from "react";
const skills = [
  { name: "HTML", exp: "5 years experience" },
  { name: "CSS", exp: "5 years experience" },
  { name: "Javascript", exp: "5 years experience" },
  { name: "Accessibility", exp: "5 years experience" },
  { name: "React", exp: "5 years experience" },
  { name: "SaaS", exp: "5 years experience" },
];

export default function SkillSection() {
  return (
    <div className="mx-auto grid grid-cols-1 justify-center gap-6 pt-10 md:max-w-5xl md:grid-cols-2 xl:grid-cols-3">
      {skills.map((aSkill) => (
        <>
          <div key={aSkill.name} className="text-center md:text-left">
            <h2 className="w-full text-4xl">{aSkill.name}</h2>
            <span className="inline-block w-full pt-2  text-tc-grey">
              {aSkill.exp}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
