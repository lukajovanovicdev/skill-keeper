import React from "react";
import Skill from "./Skill";

export default function AllSkills({ skills }) {
  return (
    <div>
      {skills.map((skill) => (
        <Skill name={skill.name} url={skill.url} />
      ))}
    </div>
  );
}
