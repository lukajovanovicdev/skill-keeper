import React, { useEffect } from "react";
import AllSkills from "../components/AllSkills";
import FormSkills from "../components/FormSkills";
import useAxios from "../Hooks/useAxios";
import skillsAPI from "../api/skillsHandler";

export default function Skills() {
  const { getSkillsAsync } = useAxios(); // TODO Ne koristi se - izbaciti
  const [skills, setSkills] = React.useState([]);

  /* TODO Obratiti paznju na imenovanje funkcija, ovaj naziv bas i nema smisla, prva stvar jer treba da stoji Skill kao jednina, s obzirom da se samo jedan skill brise,
  druga, ako je dogovorena konvencija unutar tima da se koristi "handler" za svaku f-ju, onda je mnogo primerenije da se nazove
  deleteSkillHandler/skillDeleteHandler/handleSkillDelete, nesto sto bi imalo smisla da se prevede na engleski i naravno opcija da se nazove jednostavno deleteSkill/onSkillDelete */
  const skillsHandlerDelete = (id) => {
    // TODO zakomentarisani delovi koda takodje ne treba da idu na master
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
      {/* TODO Nepotrebno prosledjivanje skills props-a */}
      <FormSkills skills={skills} setSkills={setSkills} />
      {/* TODO S obzirom da se skills koriste samo u AllSkills komponenti,
      tu treba i da ih pozivamo kako bismo izbegli re-render Skills komponente i svih njenih child-ova po default-u */}
      <AllSkills skills={skills} skillsHandlerDelete={skillsHandlerDelete} />
    </div>
  );
}
