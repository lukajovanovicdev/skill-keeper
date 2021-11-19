import React from "react";
import User from "./User";

export default function AllUsers({ users, deleteUserHandler }) {
  return (
    <div>
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
