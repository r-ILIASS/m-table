import React from "react";
// Components
import Like from "../common/Like";
import Button from "../common/Button";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/TableBody";
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
    <Table>
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={movies} columns={columns} />
    </Table>
  );
};

export default MoviesTable;
