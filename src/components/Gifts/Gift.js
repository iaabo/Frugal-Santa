import React from "react";
import "./Gifts.css";

function Gift(props) {
  return (
    <ul>
      <div>
        {props.gifts.map((gift) => (
          <div className="products">
            <img src={gift.image} className="product-img" />
            <p>{gift.title}</p>
            <p>{gift.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default Gift;
