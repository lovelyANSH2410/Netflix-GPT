import React from "react";
import GptSearchBar from "./Gpt Search/GptSearchBar";
import GptMoviesSuggestion from "./Gpt Search/GptMoviesSuggestion"
import { LOGIN_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return <div>
    <div className="fixed -z-10">
        <img
          className="brightness-50"
          src={LOGIN_BG_IMG}
          alt="body"
        />
      </div>
    <GptSearchBar/>
    <GptMoviesSuggestion />
  </div>;
};

export default GptSearch;
