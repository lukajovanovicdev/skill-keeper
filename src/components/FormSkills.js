import React, { useState } from "react";
import "./FormSkills.css";
import useAxios from "../Hooks/useAxios";
import skillsAPI from "../api/skillsHandler";
import { Button } from "@mui/material";

function FormSkills({ skills, setSkills }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { createSkill } = useAxios();

  const writingName = (event) => {
    setName(event.target.value);
  };

  const skillPostHandler = () => {
    skillsAPI
      .post({ name: name, image: image })
      .then(() => skillsAPI.get().then((data) => setSkills(data)));
  };

  const writingImageUrl = (event) => {
    setImage(event.target.value);
  };

  const savingData = (event) => {
    event.preventDefault();
    const data = { name: name, image: image };
    console.log(data);
  };

  return (
    <form className="form" onSubmit={savingData}>
      <input
        className="input"
        type="text"
        placeholder="Name"
        onChange={writingName}
        value={name}
      />
      <input
        className="input"
        type="text"
        placeholder="Image"
        onChange={writingImageUrl}
        value={image}
      />
      <Button
        className="button"
        type="submit"
        variant="contained"
        onClick={() => skillPostHandler()}
      >
        Save
      </Button>

      {/* <button className="button" type="submit">Cancel</button> */}
    </form>
  );
}

export default FormSkills;
