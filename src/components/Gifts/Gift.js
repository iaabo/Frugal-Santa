import React from "react";

function Gift(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default Gift;
