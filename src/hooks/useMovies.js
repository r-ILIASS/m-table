import { useEffect, useState } from "react";

import { getMovies, deleteMovie, toggleLike } from "../services/moviesService";

export const useMovies = () => {
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

  const handleLike = async (movie) => {
    await toggleLike(movie);

    const movies = [...data];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    setData(movies);
  };

  const handleDelete = async (movie) => {
    await deleteMovie(movie._id);
    const newData = data.filter((m) => m._id !== movie._id);
    setData(newData);
  };

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    handleLike,
    handleDelete,
  };
};
