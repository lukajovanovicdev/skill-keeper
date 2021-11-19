import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import usersAPI from "../api/usersHandler";
import AllSkills from "./AllSkills";
import skillsAPI from "../api/skillsHandler";
import "./FormUser.css";
function FormUser({ setUsers }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);

  const writingName = (event) => {
    setName(event.target.value);
  };

  const writingImageUrl = (event) => {
    setImage(event.target.value);
  };

  const writingDateOfBirth = (event) => {
    setDateOfBirth(event.target.value);
  };

  const writingLocation = (event) => {
    setLocation(event.target.value);
  };

  const savingData = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      image: image,
      dateOfBirth: dateOfBirth,
      location: location,
    };
    console.log(data);
  };
  const postUserHandler = () => {
    usersAPI
      .post({
        name: name,
        image: image,
        dateOfBirth: dateOfBirth,
        location: location,
      })
      .then(() => usersAPI.get().then((data) => setUsers(data)));
  };

  useEffect(() => {
    // skills.length === 0 && getSkillsAsync().then((data) => setSkills(data));
    skillsAPI.get().then((data) => setSkills(data));
  }, []);
  return (
    <div className="formUserContainer">
      <div className="container">
        {" "}
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
          <input
            className="input"
            type="text"
            placeholder="Date Of Birth"
            onChange={writingDateOfBirth}
            value={dateOfBirth}
          />
          <input
            className="input"
            type="text"
            placeholder="Location"
            onChange={writingLocation}
            value={location}
          />

          <Button
            variant="contained"
            className="button"
            type="submit"
            onClick={() => postUserHandler()}
          >
            Save
          </Button>
          {/* <button className="button" type="submit">Cancel</button> */}
        </form>
      </div>
      <div className="skillContainer">
        {" "}
        <AllSkills useCheckbox={true} skills={skills} />
      </div>
    </div>
  );
}

export default FormUser;
