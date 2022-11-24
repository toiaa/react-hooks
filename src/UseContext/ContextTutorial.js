import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);
// aca creas el context, createContext te permite crearlo
// lo exportas para poder importarlo en otros componentes
// el context es una colleccion de informacion que queres que este disponible para acceder desde cualquier lugar de la app
// o de donde este el provider alrededor
function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    // el provider permite que el "value" este disponible para utilizar
    // el value es todos los estados y funciones que quieras que esten disponibles
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
