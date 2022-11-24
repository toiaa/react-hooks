import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  // se utiliza para ejecutar un codigo cuando por ejemplo hay un re-render o un cambio que nos gustaria detectar
  useEffect(() => {
    // codigo a ejecutar
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);
  // el array de dependencias vacio es para que el useEffect funcione como un component did mount
  // se ejecutara solo UNA vez cuando el componente se monte
  // en este array podemos aniadir variables o estados, si estos cambian "avisan" al use effect que debe volver a ejecutarse
  // ej: [variable]
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
