import React from "react";
import skillsAPI from "../api/skillsHandler";
import classes from "./Skill.module.css";

export default function Skill({ id, name, url, skillsHandlerDelete }) {
  return (
    <div className={classes.Card}>
      <div>
        <img src={url}></img>
      </div>
      <div>{name}</div>
      <div>
        <button onClick={() => skillsHandlerDelete(id)}>Delete</button>
      </div>
    </div>
  );
}
