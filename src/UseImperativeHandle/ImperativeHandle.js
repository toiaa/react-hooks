import React, { useRef } from "react";
import Button from "./Button";
// este hook es muy util para los componentes que tienen funciones que necesitan ser ejecutadas desde afuera de ese mismo
function ImperativeHandleParent() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
          // aqui accedemos a la fx declarada dentro del useImperativeHandle hook que esta en el componente hijo utilizando la referencia al componente
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleParent;
