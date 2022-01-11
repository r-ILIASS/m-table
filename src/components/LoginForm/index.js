import React from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
// Hooks
import { useForm } from "../../hooks/useForm";
// Services
import { login } from "../../services/authService";
// Styles
import { Wrapper, Content } from "./LoginForm.styles";

const LoginForm = () => {
  const navigate = useNavigate();

  const loginSubmit = async () => {
    const res = await login(inputState);

    if (res.data && res.status === 200) {
      const jwt = res.data;
      localStorage.setItem("jwt", jwt);
      window.location = "/";
    } else if (res.data && res.status === 400) {
      const errorObj = {
        email: res.data,
      };
      setErrors(errorObj);
    }
  };

  const schema = Joi.object({
    email: Joi.string().email({ tlds: false }).label("Email").required(),
    password: Joi.string().min(5).max(30).label("Password").required(),
  });

  const { inputState, setErrors, handleSubmit, renderInput, renderButton } =
    useForm(loginSubmit, schema);

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
