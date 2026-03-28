import React from "react";

const Sorting = ({ sortBy, setSortBy }) => {
  return (
    <>
      <label htmlFor="sort">Sort</label>
      <select
        name="sort"
        value={sortBy}
        className="border "
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">All</option>
        <option value="title">Title</option>
        <option value="views">Views</option>
      </select>
    </>
  );
};

export default Sorting;
