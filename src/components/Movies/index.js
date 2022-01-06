import React from "react";
import _ from "lodash";
// Hooks
import { useMovies } from "../../hooks/useMovies";
// Utils
import { paginate } from "../../utils/paginate";
// Components
import Nav from "../Nav";
import Spinner from "../common/Spinner";
import ListGroup from "../common/ListGroup";
import Pagination from "../common/Pagination";
import MoviesTable from "../MoviesTable";
// Styles
import { Wrapper, Content } from "./Movies.styles";

const Movies = () => {
  const {
    data,
    genres,
    selectedGenre,
    sortColumn,
    pageSize,
    currentPage,
    loading,
    handleLike,
    handleDelete,
    handlePageChange,
    handleGenreSelect,
    handleSort,
  } = useMovies();

  console.log(sortColumn);

  // Filtering logic
  const filtered =
    selectedGenre && selectedGenre._id
      ? data.filter((m) => m.genre._id === selectedGenre._id)
      : data;
  // Sorting logic
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  // Pagination logic
  const movies = paginate(currentPage, pageSize, sorted);

  return (
    <>
      <Nav />
      <Wrapper>
        <Content>
          <div>
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={handleGenreSelect}
            />
          </div>
          {data.length === 0 ? (
            !loading && <p>There are no movies in the database</p>
          ) : (
            <>
              <div className="table">
                <p>
                  {data.length === 1
                    ? `There is one movie in the database`
                    : `There are ${filtered.length} movies in the database`}
                </p>
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
            </>
          )}
        </Content>
      </Wrapper>
      {loading && <Spinner />}
    </>
  );
};
export default Movies;
