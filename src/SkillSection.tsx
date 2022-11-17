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
    <div className="grid grid-cols-1 justify-center gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((aSkill) => (
        <>
          <div key={aSkill.name} className="">
            <h2 className="w-full text-center text-4xl">{aSkill.name}</h2>
            <span className="inline-block w-full pt-2 text-center text-tc-grey">
              {aSkill.exp}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
