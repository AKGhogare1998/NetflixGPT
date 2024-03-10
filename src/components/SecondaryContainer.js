import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovie} />
      </div>
    )
  );
};

export default SecondaryContainer;
