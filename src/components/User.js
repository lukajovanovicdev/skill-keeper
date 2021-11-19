import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

export default function User(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.url}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom component="div">
            {props.dateOfBirth}
          </Typography>
          <Typography gutterBottom component="div">
            {props.location}
          </Typography>

          <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => props.deleteUserHandler(props.id)}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" color="primary">
            <EditTwoToneIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
