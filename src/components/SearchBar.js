import React from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

export const SearchBar = ({ onSearchTextChange }) => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input className="search"
        placeholder="¿Qué quieres escuchar?"
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
};
