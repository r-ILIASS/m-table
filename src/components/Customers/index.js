import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";
// Components
import Nav from "../Nav";
import Spinner from "../common/Spinner";
// Hooks
import { useForm } from "./../../hooks/useForm";
import { useCustomers } from "../../hooks/useCustomers";
// Services
import { addCustomer } from "../../services/customerService";
// Styles
import { Wrapper, Content, Form } from "./Customers.styles";

const Customers = () => {
  const submitCustomer = async () => {
    await addCustomer(inputState);
    toast.success("Customer Added ✔");
    setToggleRender(!toggleRender);
  };

  const schema = Joi.object({
    name: Joi.string().min(5).max(30).label("Name").required(),
    phone: Joi.string().min(5).max(30).label("Phone number").required(),
  });

  const { inputState, renderInput, renderButton, handleSubmit } = useForm(
    submitCustomer,
    schema
  );

  const { customers, toggleRender, setToggleRender, loading } = useCustomers();

  console.log("customers ", customers);

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
          <div>
            {loading && <Spinner />}
            {customers.map((customer) => (
              <div className="customer__card">
                <p>
                  Name: <span>{customer.name}</span>
                </p>
                <p>
                  Phone number: <span>{customer.phone}</span>
                </p>
                <p>
                  Id: <span>{customer._id}</span>
                </p>
              </div>
            ))}
          </div>
        </Content>
      </Wrapper>
    </>
  );
};
export default Customers;
