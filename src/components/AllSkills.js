import React from "react";
import Skill from "./Skill";

/* TODO Cudno je ime AllSkills, dovodi u zabunu kada se gleda struktura fajlova Skills i AllSkills.
Bolja opcija bi bila da ste nazvali ovu komponentu Skills, a stranicu da ste nazvali SkillsManagement
ili tako nesto sto bolje opisuje ono sto se unutar strane desava (izlistavanje, dodavanje, brisanje, editovanje skillova) */
export default function AllSkills({
  skills,
  skillsHandlerDelete,
  useCheckbox,
}) {
  console.log("as", skills); // TODO console.log() ne treba da postoji na master grani (pod pretpostavkom da ce se sa te grane raditi deployment na testna i produkciona okruzenja)
  return (
    // TODO umesto div-a, ukoliko ne stilizujete ceo wrapper komponente pa dodajete klasu, uvek treba koristiti Fragmente https://dev.to/za3k0st/react-fragment-vs-div-44bn
    <div>
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          url={skill.image}
          id={skill.id}
          key={skill.id}
          skillsHandlerDelete={skillsHandlerDelete}
          useCheckbox={useCheckbox}
        />
      ))}
    </div>
  );
}
