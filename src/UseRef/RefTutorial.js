import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  // declaramos la referencia 
  // se utiliza para acceder a diferentes elementos del DOM
  const onClick = () => {
    inputRef.current.value = "";

    // asi accedemos al valor del elemento del DOM con la referencia
    // en este caso lo estamos dejando en vacio
    //  inputRef.current.focus asi accedemos al focus de este input por ejemplo
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      {/* ref= aqui va la referencia en el componente que queremos acceder */}
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
