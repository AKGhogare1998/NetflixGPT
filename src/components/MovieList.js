import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="p-2 pl-24">
        <div className="text-3xl py-4 text-white">{title}</div>
        <div className="flex scroll-x-overflow">
          <div className="flex">
            {/* {movies?.map((movie) => {
              <MovieCard key={movie.id} posterPath={movie.poster_path} />;
            })} */}
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
            <MovieCard
              posterPath={movies[Math.floor(Math.random() * 20)]?.poster_path}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
