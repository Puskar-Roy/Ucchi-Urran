import React from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogComp({ date, title, imageSrc }) {
  return (
    <Link to="/currentaffairs/id">
    <div className="bg-[#FFFFFF] p-6 w-[20rem] rounded-xl shadow-lg  transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src={imageSrc} alt="Blog Cover" />
        <p className="absolute top-0 bg-[#f2c94f] text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {date}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer overflow-hidden">
        {title}
      </h1>
      <div className="my-4 mx-10 flex justify-between">
        <div className="flex space-x-1 items-center">
         
        </div>
        <div className="flex space-x-1 items-center">
          
        </div>
      </div>
      <button className="mt-4 text-lg hover:bg-indigo-600 w-full text-white bg-indigo-400 py-2 px-5 rounded-xl hover:shadow-xl">
        Read More
      </button>
    </div>
    </Link>
  );
}

export default BlogComp;
