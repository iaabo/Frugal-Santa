import React from "react";
import "./Gifts.css";

function Gift(props) {
  /*  let gifts = props.gifts.map((gift) => {
    return <Gift title={gift.title} price={gift.price} image={gift.image} />;
  }); */
  return (
    <ul>
      {props.gifts.map((gift) => (
        <li key={gift.id} className="products">
          <li>{gift.title}</li>
          <li>{gift.price}</li>
          <li>
            <img src={gift.image} className="product-img" />
          </li>
        </li>
      ))}
    </ul>
  );
}

export default Gift;
