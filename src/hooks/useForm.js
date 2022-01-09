import { useState } from "react";

import Input from "../components/common/Input";

const useForm = (submitCallBack, joiSchema) => {
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

  const renderButton = (label) => {
    return <button type="submit">Login</button>;
  };

  return {
    inputState,
    handleSubmit,
    renderInput,
    renderButton,
  };
};

export default useForm;
