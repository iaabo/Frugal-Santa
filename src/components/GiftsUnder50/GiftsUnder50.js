import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Gift from "../Gifts/Gift";
import Search from "../Gifts/SearchBar";
import { GiftData } from "../Gifts/GiftData";
import "../Home/Home.css";

class GiftsUnder50 extends React.Component {
  state = {
    gifts: GiftData,
    sort: "",
  };

  handleSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const sortedGifts = this.state.gifts.sort((a, b) => {
      if (this.state.sort === "Decrease price") {
        return b.price - a.price;
      } else if (this.state.sort === "Increase price") {
        return a.price - b.price;
      }
    });
    return (
      <div>
        <NavBar />
        <h1 className="chooseCategory-title">Gifts between 20-50€</h1>
        <Search handleSort={this.handleSort} />

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
