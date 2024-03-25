import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GptMoviesSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="mx-10 md:mx-52 mt-5 bg-black text-white  top-96 bg-opacity-80">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMoviesSuggestion;
