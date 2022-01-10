import React, { useEffect } from "react";
import Joi from "joi";
import { useParams, useNavigate } from "react-router-dom";
// Hooks
import { useForm } from "../../hooks/useForm";
import { useMovies } from "../../hooks/useMovies";
import { useMovieForm } from "../../hooks/useMovieForm";
// Services
import { saveMovie } from "../../services/moviesService";
// Components
import Spinner from "../common/Spinner";
// Styles
import { Wrapper, Content } from "./MovieForm.styles";

const MovieForm = () => {
  // react-router-dom
  const { id } = useParams();
  const navigate = useNavigate();

  // Write to the DB
  const movieSubmit = async () => {
    try {
      await saveMovie(inputState);
    } catch (error) {
      console.error(error);
    }
    navigate("/movies");
  };

  // Joi schema
  const schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().min(2).max(50).label("Title").required(),
    genreId: Joi.string().label("Genre").required(),
    numberInStock: Joi.number().max(300).label("Number In Stock").required(),
    dailyRentalRate: Joi.number().max(5).label("Rate").required(),
  });

  // useMovieForm
  const { movie, loading } = useMovieForm(id, navigate);

  // useForm
  const {
    inputState,
    setInputState,
    handleSubmit,
    renderInput,
    renderSelect,
    renderButton,
  } = useForm(movieSubmit, schema);

  // useMovies
  const { genres } = useMovies();

  useEffect(() => {
    setInputState(movie);
  }, [movie]);

  return (
    <Wrapper>
      <Content>
        {!loading && (id === "new" || (id !== "new" && inputState !== {})) ? (
          <form onSubmit={handleSubmit}>
            {id === "new" ? (
              <h1>Post a new movie.</h1>
            ) : (
              <h1>
                Movie Id: <span>{id}</span>
              </h1>
            )}
            {renderInput("title", "Title")}
            {renderSelect("genreId", "Genre", genres)}
            {renderInput("numberInStock", "Number In Stock")}
            {renderInput("dailyRentalRate", "Rate")}
            {renderButton("Save Movie")}
          </form>
        ) : (
          <Spinner />
        )}
      </Content>
    </Wrapper>
  );
};

export default MovieForm;
