import React from "react";

function SearchBar(props) {
  return (
    <div className="searchbar">
      <input
        onChange={props.searchProductHandler}
        placeholder="search here the product"
        type="text"
        className="gift-search"
      />
    </div>
  );
}

export default SearchBar;
