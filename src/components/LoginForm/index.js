import React from "react";
import Joi from "joi";
// Hooks
import useForm from "../../hooks/useForm";
// Components
import Input from "../common/Input";
// Styles
import { Wrapper, Content } from "./LoginForm.styles";

const LoginForm = () => {
  const loginSubmit = () => {
    console.log("login submit ", values);
  };

  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .label("Username")
      .required(),
    password: Joi.string().min(8).max(30).label("Password").required(),
  });

  const {
    inputState: values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(loginSubmit, schema);

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input
            name="username"
            label="Username"
            onChange={handleChange}
            value={values.name}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            value={values.name}
            error={errors.password}
          />
          <div className="btn__Container">
            <button type="submit">Login</button>
          </div>
        </form>
      </Content>
    </Wrapper>
  );
};

export default LoginForm;
