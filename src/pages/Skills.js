import React, { useState } from "react";
import AllSkills from "../components/AllSkills";
import FormSkills from "../components/FormSkills";

export default function Skills() {
  const skills = [
    {
      name: "Skill 1",
      url: "https://picsum.photos/100/100",
    },
    {
      name: "Skill ",
      url: "https://picsum.photos/100/100",
    },
  ];
  return (
    <div>
      <FormSkills />
      <AllSkills skills={skills} />
    </div>
  );
}
