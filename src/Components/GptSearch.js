import React from "react";
import GptSearchBar from "./Gpt Search/GptSearchBar";
import GptMoviesSuggestion from "./Gpt Search/GptMoviesSuggestion";
import { LOGIN_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="brightness-50 h-screen object-cover md:h-auto" src={LOGIN_BG_IMG} alt="body" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
