import React from "react";
// Components
import Like from "../common/Like";
import Button from "../common/Button";
// Styles
import { Table, Thead, Tbody } from "./MoviesTable.styles";

const MoviesTable = ({
  movies,
  handleDelete,
  handleLike,
  handleSort,
  sortColumn,
}) => {
  const raiseSort = (path) => {
    let order = "asc";
    if (sortColumn.path === path) {
      order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    handleSort({ path, order });
  };

  return (
    <Table>
      <Thead>
        <tr>
          <th onClick={() => raiseSort("title")}>Title</th>
          <th onClick={() => raiseSort("genre.name")}>Genre</th>
          <th onClick={() => raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </Thead>
      <Tbody>
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
      </Tbody>
    </Table>
  );
};

export default MoviesTable;
