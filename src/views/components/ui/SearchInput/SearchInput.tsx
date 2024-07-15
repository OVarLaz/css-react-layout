import React from "react";
import { SquareIcon } from "../Icon";

const SearchInput: React.FC = () => {
  return (
    <div className="relative h-8 text-gray-600 focus-within:text-gray-400 w-full">
      <span className="absolute  h-full inset-y-0 left-0 flex items-center pl-2">
        <SquareIcon color={"#BCBECA"} />
      </span>
      <input
        type="search"
        className="py-2 text-sm w-full text-primary-gray bg-white rounded-lg pl-8 focus:outline-none focus:text-gray-900"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
