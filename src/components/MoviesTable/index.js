import React from "react";
import { Link } from "react-router-dom";
// Components
import Table from "../common/Table"; /////////////////////
import Like from "../common/Like";
import Button from "../common/Button";

const MoviesTable = ({
  movies,
  handleDelete,
  handleLike,
  handleSort,
  sortColumn,
}) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like data={movie} onClick={() => handleLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <Button
          label="Delete"
          variant="red"
          size="small"
          onClick={() => handleDelete(movie)}
        />
      ),
    },
  ];

  return (
    <Table
      data={movies}
      columns={columns}
      sortColumn={sortColumn}
      handleSort={handleSort}
    />
  );
};

export default MoviesTable;
