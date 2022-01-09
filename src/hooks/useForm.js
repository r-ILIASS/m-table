import { useState } from "react";

import Input from "../components/common/Input";
import Select from "../components/common/Select";

export const useForm = (submitCallBack, joiSchema) => {
  const [inputState, setInputState] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = joiSchema.validate(inputState, options);
    if (!error) return null;

    const errorObj = {};
    error.details.map((item) => (errorObj[item.path[0]] = item.message));
    return errorObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorObj = validate();
    setErrors(errorObj || {});
    if (errorObj) return;
    // Call the server
    submitCallBack();
  };

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderInput = (name, label, type) => (
    <Input
      name={name}
      label={label}
      onChange={handleChange}
      value={inputState[name] || ""}
      error={errors[name]}
      type={type}
    />
  );

  const renderSelect = (name, label, options) => {
    return (
      <Select
        name={name}
        value={inputState[name] || ""}
        label={label}
        options={options}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderButton = (label) => {
    return <button type="submit">{label}</button>;
  };

  return {
    inputState,
    setInputState,
    handleSubmit,
    renderInput,
    renderSelect,
    renderButton,
  };
};
