import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title} </h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="p">
        <button className="bg-white text-black p-4 px-12 mr-3 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mr-3 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
