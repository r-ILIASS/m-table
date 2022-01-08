import React from "react";
// Hooks
import useForm from "../../hooks/useForm";
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
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={values.name}
              onChange={handleChange}
              autoFocus
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={values.name}
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="btn__Container">
            <button type="submit">Login</button>
          </div>
        </form>
      </Content>
    </Wrapper>
  );
};

export default LoginForm;
