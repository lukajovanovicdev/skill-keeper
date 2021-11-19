import React from "react";
import User from "./User";
import "./User.css";
export default function AllUsers({ users }) {
  return (
    <div className="usersStyle">
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
