import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-14">
      <h1 className="py-6 text-white text-3xl font-bold">{title}</h1>
      <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
