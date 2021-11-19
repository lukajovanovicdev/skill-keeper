import React from "react";
import User from "./User";
import "./User.css";


export default function AllUsers({ users, deleteUserHandler }) {
  return (
    <div className="usersStyle">
      {users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          url={user.image}
          dateOfBirth={user.dateOfBirth}
          location={user.location}
          deleteUserHandler={deleteUserHandler}
        />
      ))}
    </div>
  );
}
