import React from "react";
import Joi from "joi";
// Hooks
import { useForm } from "../../hooks/useForm";
// Styles
import { Wrapper, Content } from "./LoginForm.styles";

const LoginForm = () => {
  const loginSubmit = () => {
    console.log("login submit ", inputState);
  };

  const schema = Joi.object({
    email: Joi.string().email({ tlds: false }).label("Email").required(),
    password: Joi.string().min(8).max(30).label("Password").required(),
  });

  const { inputState, handleSubmit, renderInput, renderButton } = useForm(
    loginSubmit,
    schema
  );

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {renderInput("email", "Email")}
          {renderInput("password", "Password", "password")}
          {renderButton("Login")}
        </form>
      </Content>
    </Wrapper>
  );
};

export default LoginForm;
