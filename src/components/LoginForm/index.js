import React from "react";
// Components
import Button from "../common/Button";
// Styles
import { Wrapper, Content } from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <Wrapper>
      <Content>
        <form>
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
            <Button label="Login" variant="blue" />
            <Button label="Demo" variant="red" />
          </div>
        </form>
      </Content>
    </Wrapper>
  );
};

export default LoginForm;
