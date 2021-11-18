import React, { useState } from "react";
import AllSkills from "../components/AllSkills";
import FormSkills from "../components/FormSkills";
import useAxios from "../Hooks/useAxios";

export default function Skills() {
  const skills = useAxios("https://6195285474c1bd00176c6be7.mockapi.io/skills");
  console.log("Skills ", skills);

  return (
    <div>
      <FormSkills />
      <AllSkills skills={skills.data || []} />
    </div>
  );
}
