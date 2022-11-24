import React, { useReducer } from "react";
// es una alternativa para useState
const reducer = (state, action) => {
  // la accion llega por medio del dispatch y dependiendo su type ejecutaremos el codigo correspondiente con el switch 
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    // aqui se muta el count pero el showText se retorna con el mismo valor anterior del estado porque nuestro objetivo no es cambiar ese estado
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    // sucede lo mismo que sucede arriba pero esta vez cambiamos al showText en lugar de cambiar al count
    default:
      return state;
  }
};
// se utiliza para cuando una fx cambia mas de 2 estados
// hay que declarar el reducer, que manejara que sucede cuando mutas ese estado 
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  // el primer valor es una variable que es un objeto que contiene los diferentes estadoas adentro xg state.count
  // el segundo valor es la funcion que se utiliza para mutar los diferentes estados
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          // de esta manera se llama a la fx que llama al reducer para que este estado sea mutado
          // se le pasa el tipo de accion adentro asi la fx reducer sabe que hacer
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
