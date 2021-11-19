import React from "react";
import Skill from "./Skill";

export default function AllSkills({ skills, skillsHandlerDelete }) {
  console.log("as", skills);
  return (
    <div>
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          url={skill.image}
          id={skill.id}
          key={skill.id}
          skillsHandlerDelete={skillsHandlerDelete}
        />
      ))}
    </div>
  );
}
