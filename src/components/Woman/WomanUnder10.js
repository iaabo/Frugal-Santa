import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Gift from "../Gifts/Gift";
import { Link } from "react-router-dom";
import { GiftData } from "../Gifts/GiftData";
import Search from "../Gifts/SearchBar";
import "../Home/Home.css";

class WomanUnder10 extends React.Component {
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
        <div className="img-container">
        <div className="background-container"></div>
      </div>
        <h1 className="chooseCategory-title">Gifts under 10€</h1>
        <Link
          to="woman"
          className="button-menu"
          style={{ textDecoration: "none", color: "white" }}
        >
          Return
        </Link>
        <Search handleSort={this.handleSort} />

        {this.state.gifts
          .filter((gift) => gift.category === "woman" && gift)
          .filter((gift) => gift.price <= 10 && gift)
          .map((gift) => (
            <Gift {...gift} key={gift.id} />
          ))}

        <Footer />
      </div>
    );
  }
}

export default WomanUnder10;
