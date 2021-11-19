import React from "react";
import User from "./User";

export default function AllUsers({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User
          name={user.name}
          url={user.image}
          dateOfBirth={user.dateOfBirth}
          location={user.location}
        />
      ))}
    </div>
  );
}
