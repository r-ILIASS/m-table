import React from "react";

const Input = ({ name, label, value, onChange, type, error }) => {
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
      {error && <p>{error}</p>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
