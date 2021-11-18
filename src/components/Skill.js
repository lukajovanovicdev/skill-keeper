import React from "react";

import classes from "./Skill.module.css";

export default function Skill({ id, name, url }) {
  console.log(classes);
  return (
    <div className={classes.Card}>
      <div>
        <img src={url}></img>
      </div>
      <div>{name}</div>
    </div>
  );
}
