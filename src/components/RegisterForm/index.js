import React from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
// Hooks
import { useForm } from "../../hooks/useForm";
// Services
import { register } from "../../services/userService";
// Styles
import { Wrapper, Content } from "./RegisterForm.styles";

const RegisterForm = () => {
  const navigate = useNavigate();

  const registerSubmit = async () => {
    const res = await register(inputState);

    if (res.data && res.status === 200) {
      const jwt = res.headers["x-auth-token"];
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
    name: Joi.string().max(50).label("Name").required(),
  });

  const { inputState, setErrors, handleSubmit, renderInput, renderButton } =
    useForm(registerSubmit, schema);

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
