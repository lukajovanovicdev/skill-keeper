import React, { useState, useEffect } from "react";
import FormUser from "../components/FormUser";
import AllUsers from "../components/AllUsers";
import usersAPI from "../api/usersHandler";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersAPI.get().then((data) => setUsers(data));
  }, []);
  const deleteUserHandler = (id) => {
    // skillsAPI
    //   .get()
    //   .then((data) => setSkills(data.filter((curr) => curr.id !== id)));
    // setSkills(skills.filter((curr) => curr.id !== skillsAPI.delete(id)));
    usersAPI
      .delete(id)
      .then(() => usersAPI.get().then((data) => setUsers(data)));
  };
  return (
    <>
      <FormUser setUsers={setUsers} />
      <AllUsers users={users} deleteUserHandler={deleteUserHandler} />
    </>
  );
}
