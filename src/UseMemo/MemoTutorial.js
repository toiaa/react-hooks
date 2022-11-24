import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);


  // este hace una llamada a una api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // calcula cual es el nombre mas largo de los comments de la api
  // esta funcion se volvera a crear cuando algun estado cambia porque se rerenderiza y se recomputa todo, no queremos eso
  // queremos que la cuando la data cambie SOLAMENTE se recompute la data, osea cuando el titulo mas largo no sea el mismo
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  // el primer argumento es a la "compute function" 
  // el segundo es el array de dependencias, cuando la variable o el state de este cambie se ejecutara devuelta la fx
  // no se volvera a ejecutar si no cambia, porque recuerda
  // CON ESTE HOOK PODES GUARDAR UN VALOR QUE DEVUELVE UNA FUNCION MEMOIZABLE Y GUARDARLO EN ESTA VARIABLE
  // se guarda lo que retorna guardamos 

  return (
    <div className="App">
      <div> {getLongestName} </div>
      {/* aca pasariamos la fx memoizable */}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
