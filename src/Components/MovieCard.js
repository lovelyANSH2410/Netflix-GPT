import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  
  return (
    <div className="w-36 md:w-48 mr-4 hover:scale-105 transform transition-transform duration-300">
      <img alt="movieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
