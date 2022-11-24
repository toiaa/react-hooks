import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const { username } = useContext(AppContext);
  // con este hook podes acceder al context muy simple , desestructuras los valores a los que quieras acceder
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;
