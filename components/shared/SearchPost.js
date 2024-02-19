import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchPost = () => {
  return (
    <div className="w-full h-[40px] bg-white flex items-center">
      <input
        type="search"
        placeholder="Search..."
        className="w-full h-full border rounded-md focus:border-none focus:outline-primary px-2"
      />
      <span className="text-[30px] ml-[-35px]">
        <FiSearch />
      </span>
    </div>
  );
};

export default SearchPost;
