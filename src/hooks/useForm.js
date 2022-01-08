import React, { useState } from "react";

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
    setErrors(errorObj || null);
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

  return { inputState, handleChange, handleSubmit };
};

export default useForm;
