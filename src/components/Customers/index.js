import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";
// Components
import Nav from "../Nav";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
// Hooks
import { useForm } from "./../../hooks/useForm";
import { useCustomers } from "../../hooks/useCustomers";
// Services
import { addCustomer } from "../../services/customerService";
// Styles
import { Wrapper, Content, Form } from "./Customers.styles";

const Customers = () => {
  const submitCustomer = async () => {
    const { data, status } = await addCustomer(inputState);

    if (data && status === 200) {
      setCustomers((prev) => [...prev, data]);
      toast.success("Customer Added ✔");
    }
  };

  const schema = Joi.object({
    name: Joi.string().min(5).max(30).label("Name").required(),
    phone: Joi.string().min(5).max(30).label("Phone number").required(),
  });

  const { inputState, renderInput, renderButton, handleSubmit } = useForm(
    submitCustomer,
    schema
  );

  const { customers, setCustomers, handleDelete, loading } = useCustomers();

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <div>
            <Form onSubmit={handleSubmit}>
              <h3>Add a customer</h3>
              {renderInput("name", "Name")}
              {renderInput("phone", "Phone number")}
              {renderButton("+")}
            </Form>
          </div>
          <div>
            {loading && <Spinner />}
            <h3>{`Customers count: ${customers.length}`}</h3>
            {customers.map((customer) => (
              <div key={customer._id} className="customer__card">
                <Button
                  label="x"
                  variant="red"
                  onClick={() => handleDelete(customer._id)}
                />
                <p>
                  Name: <span>{customer.name}</span>
                </p>
                <p>
                  Phone number: <span>{customer.phone}</span>
                </p>
                <p className="id">
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
