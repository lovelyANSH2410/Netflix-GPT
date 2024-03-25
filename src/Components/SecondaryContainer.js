import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies);

  return (
    moviesList.nowPlayingMovies && (
      <div className=" bg-black pt-5 md:pt-0">
        <div className="pl-0 md:pl-4 mt-0 md:-mt-52 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={moviesList.nowPlayingMovies}
          />
          <MovieList title={"Tv Series"} movies={moviesList.tvSeries} />
          <MovieList title={"Popular"} movies={moviesList.popularMovies} />

          <MovieList title={"Top Rated"} movies={moviesList.nowPlayingMovies} />
        </div>
        {/*
      
        MovieList 
            - Popular
                - Movie cards * n
            - Trending
            - Now Playing
            - Most Watched
     */}
      </div>
    )
  );
};

export default SecondaryContainer;
