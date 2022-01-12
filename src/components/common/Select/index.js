import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        <option value="" />
        {options.map(
          (option) =>
            option._id !== "" && (
              <option key={option._id} value={option._id}>
                {option.name || option.title}
              </option>
            )
        )}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Select;
