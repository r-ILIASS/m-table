import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";
// Components
import Nav from "../Nav";
// Hooks
import { useForm } from "./../../hooks/useForm";
// Services
import { addCustomer } from "../../services/customerService";
// Styles
import { Wrapper, Content, Form } from "./Customers.styles";

const Customers = () => {
  const submitCustomer = async () => {
    await addCustomer(inputState);
    toast.success("Customer Added ✔");
  };

  const schema = Joi.object({
    name: Joi.string().min(5).max(30).label("Name").required(),
    phone: Joi.string().min(5).max(30).label("Phone number").required(),
  });

  const { inputState, renderInput, renderButton, handleSubmit } = useForm(
    submitCustomer,
    schema
  );

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <Form onSubmit={handleSubmit}>
            <h3>Add a customer</h3>
            {renderInput("name", "Name")}
            {renderInput("phone", "Phone number")}
            {renderButton("+")}
          </Form>
          <h1>customer table</h1>
        </Content>
      </Wrapper>
    </>
  );
};
export default Customers;
