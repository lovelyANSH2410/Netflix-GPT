import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="relative">
      <form className="p-6 top-52 left-1/4 w-1/2 bg-black absolute grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchBarPlaceholder}
        ></input>
        <button className="py-4 col-span-3  w-40 rounded-md m-auto font-semibold text-lg text-white bg-red-500">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
