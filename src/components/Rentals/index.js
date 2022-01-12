import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";
// hooks
import { useMovies } from "../../hooks/useMovies";
import { useCustomers } from "../../hooks/useCustomers";
import { useRentals } from "../../hooks/useRentals";
import { useForm } from "../../hooks/useForm";
// Services
import { addRental } from "../../services/rentalsService";
// Components
import Nav from "../Nav";
import Spinner from "../../components/common/Spinner";
// Styles
import { Wrapper, Content, Grid, Form, Card } from "./Rentals.styles";

const Rentals = () => {
  const submitRental = async () => {
    const { data, status } = await addRental(
      inputState.movieId,
      inputState.customerId
    );
    if (data && status === 200) {
      setRentals((prev) => [...prev, data]);
      toast.success("Rental Submitted!");
    }
  };

  const schema = Joi.object({
    movieId: Joi.string().required(),
    customerId: Joi.string().required(),
  });

  const { data: movies, loading: moviesLoading } = useMovies();
  const { customers, loading: customersLoading } = useCustomers();
  const { rentals, setRentals, loading: rentalsLoading } = useRentals();
  const { handleSubmit, inputState, renderSelect, renderButton } = useForm(
    submitRental,
    schema
  );

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <Grid>
            {moviesLoading && customersLoading ? (
              <Spinner />
            ) : (
              <>
                <Form onSubmit={handleSubmit}>
                  <h3>Register a rental</h3>
                  {renderSelect("movieId", "Select a movie", movies)}
                  {renderSelect("customerId", "Select a customer", customers)}
                  {renderButton("Submit Rental")}
                </Form>
              </>
            )}
            {rentalsLoading && <Spinner />}
            {rentals.map((rental) => (
              <Card key={rental._id}>
                <h3>Rental Ticket</h3>
                <p>
                  <span>Customer's name: </span>
                  <br />
                  {rental.customer.name}
                </p>
                <p>
                  <span>Customer's phone: </span>
                  <br />
                  {rental.customer.phone}
                </p>
                <p>
                  <span>Rented movie: </span>
                  <br />
                  {rental.movie.title}
                </p>
                <p>
                  <span>Date out: </span>
                  <br />
                  {rental.dateOut}
                </p>
                <p>
                  <span>Rate: </span>
                  {`${rental.movie.dailyRentalRate} $`}
                </p>
              </Card>
            ))}
          </Grid>
          <div></div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Rentals;
