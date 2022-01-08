import React from "react";
// Hooks
import useForm from "../../hooks/useForm";
// Styles
import { Wrapper, Content } from "./LoginForm.styles";

const LoginForm = () => {
  const { handleSubmit } = useForm();

  return (
    <Wrapper>
      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
