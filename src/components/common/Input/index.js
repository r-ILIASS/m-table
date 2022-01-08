import React from "react";

const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
