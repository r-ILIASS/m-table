import React from "react";
import Joi from "joi";
// Hooks
import { useForm } from "../../hooks/useForm";
// Styles
import { Wrapper, Content } from "./RegisterForm.styles";

const RegisterForm = () => {
  const registerSubmit = () => {
    console.log("register submit ", inputState);
  };

  const schema = Joi.object({
    email: Joi.string().email({ tlds: false }).label("Email").required(),
    password: Joi.string().min(5).max(30).label("Password").required(),
    name: Joi.string().max(50).label("Name").required(),
  });

  const { inputState, handleSubmit, renderInput, renderButton } = useForm(
    registerSubmit,
    schema
  );

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {renderInput("email", "Email")}
          {renderInput("password", "Password", "password")}
          {renderInput("name", "Name")}
          {renderButton("Register")}
        </form>
      </Content>
    </Wrapper>
  );
};

export default RegisterForm;
