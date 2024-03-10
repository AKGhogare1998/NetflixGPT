import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const showSearchresults = useSelector((store) => store.movies.isSearchMovies);
  const movies = useSelector((store) => store.movies);
  return (
    <div className="absolute top-[58%]">
      {showSearchresults && (
        <MovieList
          title={"Funny Indian Movies"}
          movies={movies.nowPlayingMovie}
        />
      )}
    </div>
  );
};

export default GptMovieSuggestions;
