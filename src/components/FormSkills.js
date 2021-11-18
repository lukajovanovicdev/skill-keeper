import React, { useState } from "react";
import "./FormSkills.css";

function FormSkills() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const writingName = (event) => {
    setName(event.target.value);
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
        placeholder="name"
        onChange={writingName}
        value={name}
      />
      <input
        className="input"
        type="text"
        placeholder="image"
        onChange={writingImageUrl}
        value={image}
      />
      <button className="button" type="submit">
        Save
      </button>
      {/* <button className="button" type="submit">Cancel</button> */}
    </form>
  );
}

export default FormSkills;
