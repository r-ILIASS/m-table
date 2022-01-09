import React from "react";
import Joi from "joi";
import { useParams, useNavigate } from "react-router-dom";
// Hooks
import useForm from "../../hooks/useForm";
// Styles
import { Wrapper, Content } from "./MovieForm.styles";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movieSubmit = () => {
    console.log("movie submit ", inputState);

    navigate("/movies");
  };

  const schema = Joi.object({
    title: Joi.string().min(3).max(50).label("Title").required(),
    genre: Joi.string().max(50).label("Genre").required(),
    numberInStock: Joi.number().max(300).label("Number In Stock").required(),
    dailyRentalRate: Joi.number().max(5).label("Rate").required(),
  });

  const { inputState, handleSubmit, renderInput, renderButton } = useForm(
    movieSubmit,
    schema
  );

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleSubmit}>
          {id === "new" ? (
            <h1>Post a new movie.</h1>
          ) : (
            <h1>
              Movie Id: <span>{id}</span>
            </h1>
          )}
          {renderInput("title", "Title")}
          {renderInput("genre", "Genre")}
          {renderInput("numberInStock", "Number In Stock")}
          {renderInput("dailyRentalRate", "Rate")}
          {renderButton("Save Movie")}
        </form>
      </Content>
    </Wrapper>
  );
};

export default MovieForm;
