import { useEffect, useState } from "react";

import { getMovies, deleteMovie, toggleLike } from "../services/moviesService";
import { getGenres } from "../services/genresService";

export const useMovies = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);

      const { data: movies } = await getMovies();
      const { data: genres } = await getGenres();
      setData(movies);
      setGenres(genres);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    console.log("selected genre: ", genre);
  };

  return {
    data,
    setData,
    genres,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    loading,
    setLoading,
    error,
    setError,
    handleLike,
    handleDelete,
    handlePageChange,
    handleGenreSelect,
  };
};
