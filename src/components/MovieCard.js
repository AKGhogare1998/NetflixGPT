import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4  shadow-lg transition-all duration-700 hover:scale-110">
      <img src={IMG_CDN + posterPath} alt="movie"></img>
    </div>
  );
};

export default MovieCard;
