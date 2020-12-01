import React from "react";
import "./Gifts.css";

function Gift(props) {
  return (
    <ul>
      <div>
        {props.gifts.map((gift) => (
          <div className="products">
            <img src={gift.image} className="product-img" />
            <h1 className="gift-title">{gift.title}</h1>
            <p>{gift.price}€</p>
            <button className="gift-button">View Details</button>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default Gift;
