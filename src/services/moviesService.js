import http from "./httpService";

const apiUrl = "http://localhost:4000/api";
const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function toggleLike(movie) {
  if (movie._id) {
    const body = { ...movie };
    body.genreId = movie.genre._id;
    body.isLiked = !body.isLiked;
    delete body._id;
    delete body.genre;
    delete body.__v;
    return http.put(movieUrl(movie._id), body);
  }
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
