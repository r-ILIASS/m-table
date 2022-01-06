import React from "react";
// Hooks
import { useMovies } from "../../hooks/useMovies";
// Utils
import { paginate } from "../../utils/paginate";
// Components
import Nav from "../Nav";
import Like from "../common/Like";
import Button from "../common/Button";
import Spinner from "../common/Spinner";
import ListGroup from "../common/ListGroup";
import Pagination from "../common/Pagination";
// Styles
import { Wrapper, Content } from "./Movies.styles";

const Movies = () => {
  const {
    data,
    genres,
    pageSize,
    currentPage,
    loading,
    handleLike,
    handleDelete,
    handlePageChange,
    handleGenreSelect,
  } = useMovies();

  // Pagination logic
  const movies = paginate(currentPage, pageSize, data);

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <ListGroup
            textProperty="name"
            valueProperty="_id"
            items={genres}
            onItemSelect={handleGenreSelect}
          />
          {data.length === 0 ? (
            !loading && <p>There are no movies in the database</p>
          ) : (
            <>
              <p>
                {data.length === 1
                  ? `There is one movie in the database`
                  : `There are ${data.length} movies in the database`}
              </p>
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
              <Pagination
                itemsCount={data.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onClick={handlePageChange}
              />
            </>
          )}
        </Content>
      </Wrapper>
      {loading && <Spinner />}
    </>
  );
};
export default Movies;
