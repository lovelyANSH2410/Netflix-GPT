import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-2 md:pl-12 mx-8">
      <h1 className="py-6 text-white text-lg md:text-3xl font-bold">{title}</h1>
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
