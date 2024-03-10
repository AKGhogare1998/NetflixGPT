import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageSelected = useSelector((store) => store.config.language);
  return (
    <div className="absolute z-10 top-[30%] right-[28%] w-[50%]">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 text-black"
          placeholder={lang[languageSelected].gptSearchText}
        />
        <button className="py-2 px-4 m-4 col-span-3 text-white bg-red-700 rounded-lg">
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
