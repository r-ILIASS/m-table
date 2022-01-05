import React from "react";
// Hooks
import { useMovies } from "../../hooks/useMovies";
// Components
import Nav from "../Nav";
import Button from "../common/Button";
import Like from "../common/Like";
import Spinner from "../common/Spinner";
// Styles
import { Wrapper, Content } from "./Movies.styles";

const Movies = () => {
  const { data, loading, handleLike, handleDelete } = useMovies();

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
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
                  {data.map((movie) => (
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
            </>
          )}
        </Content>
      </Wrapper>
      <br />
      <br />
      <br />
      {loading && <Spinner />}
    </>
  );
};
export default Movies;
