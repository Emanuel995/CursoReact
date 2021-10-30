import React from "react";
import PropTypes from "prop-types";

const InputNum = ({ name }) => {
  return (
    <div>
      <label>{name}: </label> <input type="text" />
    </div>
  );
};

InputNum.propTypes = {
  name: PropTypes.string,
};

export default InputNum;
