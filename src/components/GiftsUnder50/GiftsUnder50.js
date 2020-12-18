import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Gift from "../Gifts/Gift";
import { GiftData } from "../Gifts/GiftData";
import "../Home/Home.css";

class GiftsUnder50 extends React.Component {
  state = {
    gifts: GiftData,
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="chooseCategory-title">Choose the Category</h1>

        {this.state.gifts
          .filter((gift) => gift.price > 20 && gift.price <= 50 && gift)
          .map((gift) => (
            <Gift {...gift} key={gift.id} />
          ))}
        <Footer />
      </div>
    );
  }
}

export default GiftsUnder50;
