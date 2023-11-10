import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ onSearchTextChange }) => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Esto es una prueba ..."
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
};
