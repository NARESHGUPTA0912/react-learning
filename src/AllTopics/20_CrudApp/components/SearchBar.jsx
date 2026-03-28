import React from "react";

const SearchBar = (query, setQuery) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search here.... "
      className="w-70 p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
    //   value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
