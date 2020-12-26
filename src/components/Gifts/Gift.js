import React from "react";
import { Link } from "react-router-dom";
import "./Gifts.css";

function Gift(props) {
  return (
    <div className="card">
      <div className="products">
        <img src={props.image} className="product-img" />
        <p className="gift-price">{props.price}€</p>
        <h1 className="gift-title">{props.title}</h1>
        <p className="gift-store">{props.store}</p>
        {/* <p className="gift-description">{props.description}</p> */}
        <div className="button">
          <Link
            to="about-us"
            className="gift-button"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Contact Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gift;
