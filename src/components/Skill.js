import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import React from "react";
import skillsAPI from "../api/skillsHandler"; // TODO ne koristi se - izbaciti
// TODO ako se customize-uje cisto material-ui komponenta, ne treba koristiti css module, vec neko od ova dva resenja: https://mui.com/system/basics/
import classes from "./Skill.module.css";
import { Box } from "@mui/system";

export default function Skill({
  id,
  name,
  url,
  skillsHandlerDelete,
  useCheckbox,
}) {
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.Card}>
      <Grid container justifyContent="space-between">
        {/* TODO useCheckbox deluje kao da se nigde ne setuje, umesto praznog fragmenta, ne bi bilo lose staviti neku sliku kao placeholder */}
        <Grid item>{useCheckbox ? <></> : <img src={url}></img>}</Grid>
        <Grid item>{name}</Grid>
        <Grid item>
          {useCheckbox ? (
            <input type="checkbox"></input>
          ) : (
            /* TODO skillsHandlerDelete - 1. naming 2. f-ja se ne koristi nigde drugde, trebala je biti definisana u ovoj komponenti da se izbegne nepotrebni prop drilling*/
            <Button
              onClick={() => skillsHandlerDelete(id)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
