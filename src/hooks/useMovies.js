import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getMovies, deleteMovie, toggleLike } from "../services/moviesService";
import { getGenres } from "../services/genresService";

export const useMovies = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);

      const { data: movies } = await getMovies();
      const { data: genres } = await getGenres();
      setData(movies);
      setGenres([{ _id: "", name: "All Genres" }, ...genres]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = async (movie) => {
    const { data: res } = await toggleLike(movie);
    if (res.isLiked) {
      toast.success("Movie liked!");
    } else if (!res.isLiked) {
      toast.success("Movie unliked!");
    }

    const movies = [...data];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    setData(movies);
  };

  const handleDelete = async (movie) => {
    await deleteMovie(movie._id);
    toast.error("Movie deleted!");
    const newData = data.filter((m) => m._id !== movie._id);
    setData(newData);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSearchQuery("");
    setCurrentPage(1);
    setSelectedGenre(genre);
  };

  const handleSort = (sortColumnObject) => {
    setSortColumn(sortColumnObject);
  };

  const handleSearch = (query) => {
    setSelectedGenre({});
    setCurrentPage(1);
    setSearchQuery(query);
  };

  return {
    data,
    setData,
    genres,
    selectedGenre,
    sortColumn,
    searchQuery,
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
    handleSort,
    handleSearch,
  };
};
