import React from "react";

function Filter({ setFilterTitle, setFilterRate }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setFilterRate(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
