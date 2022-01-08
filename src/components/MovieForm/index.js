import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// Components
import Button from "../common/Button";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>MovieForm</h1>
      <p>Movie id: {id}</p>
      <Button label="Save" variant="blue" onClick={() => navigate("/movies")} />
    </div>
  );
};

export default MovieForm;
