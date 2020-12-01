import React from "react";
import Gift from "./Gift";
import Filter from "./Filter";
/* import SearchBar from "./SearchBar"; */
import "../Home/Home.css";

class GiftList extends React.Component {
  state = {
    searchValue: "",
    gifts: [
      {
        id: 1,
        title: "Smilling Sheep",
        price: 8,
        store: "Gifts4All",
        description:
          "The Sheep that smiles all year even when you are sad. Anti-alergic. Adapted for children above 14 months",
        category: "kids",
        image:
          "https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?cs=srgb&dl=pexels-tetyana-kovyrina-12211.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 2,
        title: "Rubik Cube",
        price: 4,
        store: "Gifts4All",
        description: "A classic cube that will develop young minds",
        category: "kids",
        image:
          "https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 4,
        title: "I believe in Unicorns Mug",
        price: 9,
        store: "Abracadabra",
        description: "Drinking coffee with style. Adapted to microwaves.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/1755215/pexels-photo-1755215.jpeg?cs=srgb&dl=pexels-lisa-fotios-1755215.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 5,
        title: "Corkscrew",
        price: 9,
        store: "Monica's",
        description: "Ergonomic Wine Opener.",
        category: "man",
        image:
          "https://images.pexels.com/photos/404341/wine-cork-corkscrew-uncork-404341.jpeg?cs=srgb&dl=pexels-skitterphoto-404341.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 6,
        title: "Blue Agenda",
        price: 8.79,
        store: "Gifts4All",
        description: "A4 hardcover agenda for 2021.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?cs=srgb&dl=pexels-ann-h-1765033.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 7,
        title: "Candle",
        price: 9,
        store: "Gifts4All",
        description: "A scent of Pine Forest.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-3270223.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 8,
        title: "Water bottle",
        price: 17.89,
        store: "La La La",
        description: "Black reusable water bottle. Free BPA.",
        category: "man",
        image:
          "https://images.pexels.com/photos/3738062/pexels-photo-3738062.jpeg?cs=srgb&dl=pexels-cottonbro-3738062.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 9,
        title: "Leather Wallet",
        price: 48,
        store: "Leather Goodies",
        description: "Small Man Wallet. 100% Leather.",
        category: "man",
        image:
          "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 10,
        title: "Silver Bracelets",
        price: 32,
        store: "Ramiro Silver",
        description: "Pack of 3 bracelets of silver",
        category: "woman",
        image:
          "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 11,
        title: "Wood Sunglasses",
        price: 45.9,
        store: "Woodyland",
        description: "Next fashion trend. Sunglasses with real wood.",
        category: "man",
        image:
          "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 12,
        title: "Cactus",
        price: 5.89,
        store: "FlowerPower",
        description: "Cactus with grey vessel included .",
        category: "woman",
        image:
          "https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 13,
        title: "Wooden House",
        price: 49.9,
        store: "Woodyland",
        description:
          "House and animals made of natural wood. Fit for kids above 11 months",
        category: "kids",
        image:
          "https://images.pexels.com/photos/3933077/pexels-photo-3933077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 14,
        title: "Red Mini Cooper",
        price: 5.89,
        store: "Gifts4All",
        description: "Mini car. Apted for kids above 4 years",
        category: "kids",
        image:
          "https://images.pexels.com/photos/45846/toy-car-mini-cooper-beach-45846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 15,
        title: "Notebook Pack",
        price: 16.89,
        store: "La La La",
        description:
          "Enjoy the little things notebook with pen and pencil included.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/243221/pexels-photo-243221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 16,
        title: "Monopoly",
        price: 18.9,
        store: "La La La",
        description: "Monopoly in Russian",
        category: "kids",
        image:
          "https://images.pexels.com/photos/4004168/pexels-photo-4004168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 17,
        title: "Coffee Mug",
        price: 8.9,
        store: "Gifts4All",
        description: "Grey mug. Made in Portugal",
        category: "man",
        image:
          "https://images.pexels.com/photos/1809127/pexels-photo-1809127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 18,
        title: "White frame",
        price: 6.9,
        store: "La La La",
        description: "Frame with inspirational quote. Minimalist style.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/2062433/pexels-photo-2062433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 19,
        title: "Artist Pack",
        price: 18.9,
        store: "Artist Store",
        description: "Pack with A5 drawing book + pencil + black marker",
        category: "woman",
        image:
          "https://images.pexels.com/photos/826114/pexels-photo-826114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 20,
        title: "4 Classic Books",
        price: 18.9,
        store: "La La La",
        description: "Pack of 4 A6 Classic Books.",
        category: "man",
        image:
          "https://images.pexels.com/photos/3847646/pexels-photo-3847646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 21,
        title: "2 Classic Books",
        price: 11.9,
        store: "La La La",
        description: "Pack of 2 A6 Classic Books.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/3847641/pexels-photo-3847641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },

      {
        id: 22,
        title: "Classic Books for Children",
        price: 15.9,
        store: "La La La",
        description:
          "Pack of 6 Jane Austen Classics adapted for children between 8-11 years",
        category: "kids",
        image:
          "https://images.pexels.com/photos/1666320/pexels-photo-1666320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
    ],
    giftsCategory: "",
  };
  /* searchProductHandler = (event) => {
    const inputValue = event.target.value;
    this.setState({ searchValue: inputValue });
  }; */

  handleChangeFilter = (event) => {
    this.setState({
      giftsCategory: event.target.value,
    });
  };

  getFilteredGifts() {
    const { gifts, giftsCategory } = this.state;
    if (!giftsCategory) {
      return gifts;
    }
    return gifts.filter((gifts) => gifts.category === giftsCategory);
  }

  render() {
    const gifts = this.getFilteredGifts();

    return (
      <div>
        {/* <SearchBar searchProductHandler={this.searchGifts} /> */}
       
        <h1 className="chooseCategory-title">Choose the Category</h1>

        <Filter
          value={this.state.giftsCategory}
          handleChange={this.handleChangeFilter}
        />
        <Gift gifts={gifts} />

        {/* {this.state.gifts.map((gift) => (
          <Gift {...gift} key={gift.id} />
        ))} */}
      </div>
    );
  }
}

export default GiftList;
