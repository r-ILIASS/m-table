import React from "react";

const useForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call form-specific custom submit;
    console.log("submit");
  };

  return { handleSubmit };
};

export default useForm;
