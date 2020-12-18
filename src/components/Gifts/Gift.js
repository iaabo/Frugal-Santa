import React from "react";
import "./Gifts.css";

function Gift(props) {
  
  return (
    <div className="card">
        <div className="products">
          <img src={props.image} className="product-img" />
          <h1 className="gift-title">{props.title}</h1>
          <p className="gift-price">{props.price}€</p>
          <button className="gift-button">View Details</button>
        </div>
        </div>
      )
  }

export default Gift;
