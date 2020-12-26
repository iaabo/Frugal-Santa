import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Gift from "../Gifts/Gift";
import { GiftData } from "../Gifts/GiftData";
import { Link } from "react-router-dom";
import Search from "../Gifts/SearchBar";
import "../Home/Home.css";

class WomanUnder50 extends React.Component {
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
        <div className="img-container-woman">
          <div className="background-container"></div>
        </div>
        <h1 className="chooseCategory-title">Our Proposal</h1>
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
          .filter((gift) => gift.price > 20 && gift.price <= 50 && gift)
          .map((gift) => (
            <Gift {...gift} key={gift.id} />
          ))}

        <Footer />
      </div>
    );
  }
}

export default WomanUnder50;
