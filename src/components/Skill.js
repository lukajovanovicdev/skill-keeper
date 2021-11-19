import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import React from "react";
import skillsAPI from "../api/skillsHandler";
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
        <Grid item>{useCheckbox ? <></> : <img src={url}></img>}</Grid>
        <Grid item>{name}</Grid>
        <Grid item>
          {useCheckbox ? (
            <input type="checkbox"></input>
          ) : (
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
