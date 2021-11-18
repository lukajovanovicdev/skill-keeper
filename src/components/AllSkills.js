import React from "react";
import Skill from "./Skill";

export default function AllSkills({ skills }) {
  console.log("as", skills);
  return (
    <div>
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          url={skill.image}
          id={skill.id}
          key={skill.id}
        />
      ))}
    </div>
  );
}
