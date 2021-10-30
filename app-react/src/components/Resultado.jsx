import React from "react";
import PropTypes from "prop-types";

const Resultado = ({ operacion, calculo }) => {
  return (
    <div>
      <br />
      <span>
        <label>
          {operacion}: {calculo}
        </label>
      </span>
    </div>
  );
};

Resultado.prototype = {
  operacion: PropTypes.string,
  calculo: PropTypes.number,
};

export default Resultado;
