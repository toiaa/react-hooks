import React, { forwardRef, useImperativeHandle, useState } from "react";


//forwardRef nos permite definir funciones basadas en una referencua q podemos llamar utilizando esa referencia

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    // esta funcion podra ser llamada dentro del padre haciendo referencia a este componente utilizando buttonRef(declarada en el componente padre)
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
