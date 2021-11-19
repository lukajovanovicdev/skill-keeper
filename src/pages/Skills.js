import React, { useEffect, useMemo } from "react";
import axios from "axios";
import AllSkills from "../components/AllSkills";
import FormSkills from "../components/FormSkills";
import useAxios from "../Hooks/useAxios";
import skillsAPI from "../api/skillsHandler";

export default function Skills() {
  const { getSkillsAsync } = useAxios();
  const [skills, setSkills] = React.useState([]);

  useEffect(() => {
    // skills.length === 0 && getSkillsAsync().then((data) => setSkills(data));
    skillsAPI.get().then((data) => setSkills(data));
  }, []);

  return (
    <div>
      <FormSkills skills={skills} setSkills={setSkills} />
      <AllSkills skills={skills} />
    </div>
  );
}
