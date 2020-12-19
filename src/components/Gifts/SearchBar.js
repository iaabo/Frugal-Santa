import React from "react";

const SearchBar = (props) => {
  return (
    <div className="user-inputs">
      <select
        defaultValue="Sort"
        className="searchbar"
        onChange={props.handleSort}
      >
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Decrease price">Price high to low</option>
        <option value="Increase price">Price low to high</option>
      </select>
    </div>
  );
};

export default SearchBar;
