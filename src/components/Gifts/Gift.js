import React from "react";

function Gift(props) {
  return (
    <div className="products">
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Gift;
