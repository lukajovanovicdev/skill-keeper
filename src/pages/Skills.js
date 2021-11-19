import React, { useEffect } from "react";
import AllSkills from "../components/AllSkills";
import FormSkills from "../components/FormSkills";
import useAxios from "../Hooks/useAxios";
import skillsAPI from "../api/skillsHandler";

export default function Skills() {
  const { getSkillsAsync } = useAxios();
  const [skills, setSkills] = React.useState([]);

  const skillsHandlerDelete = (id) => {
    // skillsAPI
    //   .get()
    //   .then((data) => setSkills(data.filter((curr) => curr.id !== id)));
    // setSkills(skills.filter((curr) => curr.id !== skillsAPI.delete(id)));
    skillsAPI
      .delete(id)
      .then(() => skillsAPI.get().then((data) => setSkills(data)));
  };

  useEffect(() => {
    // skills.length === 0 && getSkillsAsync().then((data) => setSkills(data));
    skillsAPI.get().then((data) => setSkills(data));
  }, []);

  return (
    <div>
      <FormSkills skills={skills} setSkills={setSkills} />
      <AllSkills skills={skills} skillsHandlerDelete={skillsHandlerDelete} />
    </div>
  );
}
