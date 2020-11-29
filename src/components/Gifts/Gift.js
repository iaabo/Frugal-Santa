import React from "react";
import "./Gifts.css";

function Gift(props) {
  return (
    <div className="products">
      <img src={props.image} alt={props.title} className="product-img" />
      <p className="product-title">{props.title}</p>
      <p className="product-price">{props.price} € (Tax Included)</p>
    </div>
  );
}

export default Gift;
