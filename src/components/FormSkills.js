import React, { useState } from 'react';
import './FormSkills.css';
import useAxios from '../Hooks/useAxios';
import skillsAPI from '../api/skillsHandler';
import { Button } from '@mui/material';
import AllSkills from './AllSkills';

// TODO Bolji naming bi bio AddSkillForm, jer bolje opisuje za sta komponenta sluzi
function FormSkills({ skills, setSkills }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const { createSkill } = useAxios();

  const writingName = (event) => {
    setName(event.target.value);
  };

  const skillPostHandler = () => {
    skillsAPI.post({ name: name, image: image }).then(() => skillsAPI.get().then((data) => setSkills(data)));
  };

  const writingImageUrl = (event) => {
    setImage(event.target.value);
  };

  // TODO Nepotrebno i bez svrhe
  const savingData = (event) => {
    event.preventDefault();
    const data = { name: name, image: image };
    console.log(data);
  };

  return (
    <form className="form" onSubmit={savingData}>
      {/* TODO S obzirom da nema nikakve validacije nad input poljima, moze se koristiti i useRef hook,
      koji predstavlja jednostavniji nacin dohvatanja podataka bez re-rendera prilikom unosa svakog karaktera.
      https://medium.com/technofunnel/react-uncontrolled-elements-with-useref-hooks-9c5873476c6f */}
      <input className="input" type="text" placeholder="Name" onChange={writingName} value={name} />
      <input className="input" type="text" placeholder="Image" onChange={writingImageUrl} value={image} />
      <Button className="button" type="submit" variant="contained" onClick={() => skillPostHandler()}>
        Save
      </Button>
      {/* TODO type="reset" na cancel dugmetu, da se odradi reset unetih podataka */}
      {/* <button className="button" type="submit">Cancel</button> */}
    </form>
  );
}

export default FormSkills;
