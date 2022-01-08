import React, { useState } from "react";

const useForm = (submitCallBack) => {
  const [inputState, setInputState] = useState({});

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call form-specific submitCallBack function;
    submitCallBack();
  };

  return { inputState, handleChange, handleSubmit };
};

export default useForm;
