import React from "react";
// Components
import Like from "../common/Like";
import Button from "../common/Button";
import TableHeader from "../common/TableHeader";
// Styles
import { Table } from "./MoviesTable.styles";

const MoviesTable = ({
  movies,
  handleDelete,
  handleLike,
  handleSort,
  sortColumn,
}) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <Table>
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
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
    </Table>
  );
};

export default MoviesTable;
