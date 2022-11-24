import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!"); // Esta data seria data de una api

  const returnComment = useCallback(
    (name) => {
      // pedis la data aca y
      // aqui haces lo que quieras con la data
      return data + name;
    },
    [data]
  );
  // queremos que solo se vuelva a recrear la fx cuando hay un cambio en data
  // en lugar de estar guardando la data q la fx retorna (como en el caso de el use memo) guardamos la fx!!!

  return (
    <div className="App">
      <Child returnComment={returnComment} />
      {/* le pasamos la fx al hijo */}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
