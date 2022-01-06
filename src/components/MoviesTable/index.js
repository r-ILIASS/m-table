import React from "react";
// Components
import Like from "../common/Like";
import Button from "../common/Button";

const MoviesTable = ({ movies, handleDelete, handleLike }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like data={movie} onClick={() => handleLike(movie)} />
            </td>
            <td>
              <Button
                label="Delete"
                variant="red"
                size="small"
                onClick={() => handleDelete(movie)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
