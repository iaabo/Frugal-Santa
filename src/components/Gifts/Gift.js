import React from "react";
import "./Gifts.css";

function Gift(props) {
  return (
    <div className="card">
      {props.gifts.map((gift) => (
        <div className="products">
          <img src={gift.image} className="product-img" />
          <h1 className="gift-title">{gift.title}</h1>
          <p className="gift-price">{gift.price}€</p>
          <button className="gift-button">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Gift;
