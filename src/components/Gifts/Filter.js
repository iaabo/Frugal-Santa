import React from "react";
import "./Gifts.css";

function Filter(props) {
  const { value, handleChange } = props;
  return (
    <div className="select">
      <select value={value} onChange={handleChange}>
        <option value="">All</option>
        <option value="woman">Woman</option>
        <option value="man">Man</option>
        <option value="kids">Kids</option>
      </select>
    </div>
  );
}

export default Filter;
