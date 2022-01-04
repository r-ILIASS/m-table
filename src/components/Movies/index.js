import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../../services/moviesService";

import Nav from "../Nav";
import Button from "../common/Button";

import { Wrapper, Content } from "./Movies.styles";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);

      const { data: movies } = await getMovies();
      setData(movies);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (movie) => {
    await deleteMovie(movie._id);
    const newData = data.filter((m) => m._id !== movie._id);
    setData(newData);
  };

  /// to do: deleting the movie

  if (loading) {
    console.log("Loading ....");
  } else if (data.length > 0) {
    console.log("data ", data);
  }

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          {data.length === 0 ? (
            <h1>There are no movies in the database</h1>
          ) : (
            <>
              <p>{`There are ${data.length} movies in the database`}</p>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
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

      {loading && <h1>Loading ....</h1>}
    </>
  );
};
export default Movies;

// {data.map((movie) => (
//   <h3 key={movie._id}>{movie.title}</h3>
// ))}
