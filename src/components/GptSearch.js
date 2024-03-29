import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backgroundImage } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          src={backgroundImage}
          alt="background"
          className="opacity-50"
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
