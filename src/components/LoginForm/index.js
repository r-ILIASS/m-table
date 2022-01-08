import React from "react";
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

  const {
    inputState: values,
    handleChange,
    handleSubmit,
  } = useForm(loginSubmit);

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input
            name="username"
            label="Username"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={values.name}
            onChange={handleChange}
            type="password"
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
