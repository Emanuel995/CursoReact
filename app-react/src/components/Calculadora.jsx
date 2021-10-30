import React, { useState } from "react";
import InputNum from "./InputNum";
import Resultado from "./Resultado";

const Calculadora = () => {
  const [suma, setsuma] = useState(0);

  return (
    <div>
      <InputNum name="Numero 1" />
      <InputNum name="Numero 2" />
      <Resultado operacion="suma" calculo={suma} />
    </div>
  );
};

export default Calculadora;
