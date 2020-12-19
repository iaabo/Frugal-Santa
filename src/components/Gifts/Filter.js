import React from "react";
import "./Gifts.css";

function Filter(props) {
  return (
    <div className="custom-select">
      <select defaultValue="Category" onChange={props.handleChange}>
        <option disabled value="Category">
          Category
        </option>
        <option value="all">All</option>
        <option value="woman">Woman</option>
        <option value="man">Man</option>
        <option value="kids">Kids</option>
      </select>
    </div>
  );
}

export default Filter;
