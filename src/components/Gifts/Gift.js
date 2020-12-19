import React from "react";
import { Link } from "react-router-dom";
import "./Gifts.css";

function Gift(props) {
  return (
    <div className="card">
      <div className="products">
        <img src={props.image} className="product-img" />
        <h1 className="gift-title">{props.title}</h1>
         <p className="gift-store">{props.store}</p>
        <p className="gift-description">{props.description}</p>
        <p className="gift-price">{props.price}€</p>
        <Link to={`/gift/${props.id}`}>View Details</Link>
          <button className="gift-button">
          {" "}
          <a
            href={props.url}
            target="_black"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Contact Store
          </a>
        </button>
      </div>
    </div>
  );
}

export default Gift;
