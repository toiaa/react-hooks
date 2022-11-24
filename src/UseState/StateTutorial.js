import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro"); // () aca va el valor inicial
  // el primer valor es el estado
  // el segundo valor es la fx que va a mutar el estado
  // deben tener el mismo nombre
  // CADA VEZ QUE UN ESTADO MUTA la pagina se vuelve a renderizar, IMPORTANTE A TENER EN CUENTA
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
