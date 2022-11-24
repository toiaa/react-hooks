import React, { useEffect } from "react";

function Child({ returnComment }) {
  // recibimos la fx y la ponemos en el array de dependencias del useEffect
  // y para que este UEffect no se vuelva a ejecutar al re-renderizar (pej. cambiando un estado) usamos el callback
  // si no tuvieramos el usecallback cuando re-renderizas se vuelven a declarar todas las funciones
  // esto dispara al uEffect por estar en el array de dependencias cuando se vuelve a declarar
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);


  // aca lo necesitamos para poder acceder a la fx
  return <div>{returnComment("Pedro")}</div>;
}

export default Child;
