import React, { useState, useEffect } from "react";
import FormUser from "../components/FormUser";
import AllUsers from "../components/AllUsers";
import usersAPI from "../api/usersHandler";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersAPI.get().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <FormUser setUsers={setUsers} />
      <AllUsers users={users} />
    </>
  );
}
