import { useEffect, useMemo, useState, useCallback } from "react";

// Services
import { getMovie } from "../services/moviesService";

export const useMovieForm = (id, navigate) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mapToViewModel = (movieObj) => {
    return {
      _id: movieObj._id,
      title: movieObj.title,
      genreId: movieObj.genre._id,
      numberInStock: movieObj.numberInStock,
      dailyRentalRate: movieObj.dailyRentalRate,
    };
  };

  const fetchMovie = useCallback(async () => {
    try {
      const { data } = await getMovie(id);
      setMovie(mapToViewModel(data));
      setLoading(false);
    } catch (error) {
      navigate("/notfound", { replace: true });
      console.error("error ", error);
    }
  }, [loading]);

  useEffect(() => {
    if (id === "new") {
      setLoading(false);
      return;
    }
    fetchMovie();
  }, [id, fetchMovie]);

  return {
    movie,
    loading,
    setLoading,
    error,
  };
};
