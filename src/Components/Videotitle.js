import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[30%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="p-4 px-12 text-black bg-white text-xl font-bold rounded-md shadow-md hover:bg-opacity-80">
          Play
        </button>
        <button className="p-4 px-12 text-white mx-2 bg-gray-500 rounded-md text-xl font-bold shadow-md bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
