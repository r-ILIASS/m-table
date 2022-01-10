import _ from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
// Hooks
import { useMovies } from "../../hooks/useMovies";
// Utils
import { paginate } from "../../utils/paginate";
// Components
import Nav from "../Nav";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
import SearchField from "../common/SearchField";
import ListGroup from "../common/ListGroup";
import Pagination from "../common/Pagination";
import MoviesTable from "../MoviesTable";
// Styles
import { Wrapper, Content, Hflex } from "./Movies.styles";

const Movies = () => {
  const {
    data,
    genres,
    selectedGenre,
    sortColumn,
    searchQuery,
    pageSize,
    currentPage,
    loading,
    handleLike,
    handleDelete,
    handlePageChange,
    handleGenreSelect,
    handleSort,
    handleSearch,
  } = useMovies();

  const navigate = useNavigate();

  // Filtering
  let filtered = data;
  if (searchQuery) {
    filtered = data.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  } else if (selectedGenre && selectedGenre._id) {
    filtered = data.filter((m) => m.genre._id === selectedGenre._id);
  }
  // Sorting
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  // Pagination
  const movies = paginate(currentPage, pageSize, sorted);

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          {/* ====== ListGroup start ====== */}
          <div>
            {genres.length > 0 && (
              <ListGroup
                items={genres}
                selectedItem={selectedGenre}
                onItemSelect={handleGenreSelect}
              />
            )}
          </div>
          {/* ====== ListGroup end ====== */}
          {/* ====== MoviesTable start ====== */}
          {data.length === 0 ? (
            !loading && (
              <Hflex>
                <p>There are no movies in the database</p>
                <Button
                  onClick={() => navigate("/movies/new")}
                  label="+"
                  variant="blue"
                />
              </Hflex>
            )
          ) : (
            <div>
              <Hflex>
                <p>
                  {data.length === 1
                    ? `There is one movie in the database`
                    : `There are ${filtered.length} movies in the database`}
                </p>
                <Button
                  onClick={() => navigate("/movies/new")}
                  label="+"
                  variant="blue"
                />
              </Hflex>
              <SearchField value={searchQuery} onChange={handleSearch} />
              <MoviesTable
                movies={movies}
                handleDelete={handleDelete}
                handleLike={handleLike}
                handleSort={handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onClick={handlePageChange}
              />
            </div>
          )}
          {/* ====== MoviesTable end ====== */}
        </Content>
      </Wrapper>
      {loading && <Spinner />}
    </>
  );
};
export default Movies;
