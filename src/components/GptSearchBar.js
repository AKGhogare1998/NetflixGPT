import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { searchMoviesClick } from "../utils/movieSlice";

const GptSearchBar = () => {
  const languageSelected = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const gptQuery =
    "Act as movie recommendation system and suggest some movies for query : " +
    searchText?.current?.value +
    ". only give me names of 5 movies, comma seprated like example below. Example :['don',sholay,golmaal]";

  const handleGptSearchClick = () => {
    dispatch(searchMoviesClick());
    // const getGptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const listOfMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];
  };

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=padosan&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = data.json();
    return json?.results;
  };

  return (
    <div className="absolute z-10 top-[30%] right-[28%] w-[50%]">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-black"
          placeholder={lang[languageSelected].gptSearchText}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 text-white bg-red-700 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[languageSelected].search}
        </button>
      </form>
      <div className="text-white p-2 bg-black mt-1">
        Search movie query as : "Funny Indian Retro Movies" as GPT subscription
        expired.
      </div>
    </div>
  );
};

export default GptSearchBar;
