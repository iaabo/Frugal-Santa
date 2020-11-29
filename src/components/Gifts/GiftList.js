import React from "react";
import Gift from "./Gift";

class GiftList extends React.Component {
  state = {
    gifts: [
      {
        id: 1,
        title: "Smilling Sheep",
        price: 8,
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
        description: "Ergonomic Wine Opener.",
        category: "man",
        image:
          "https://images.pexels.com/photos/404341/wine-cork-corkscrew-uncork-404341.jpeg?cs=srgb&dl=pexels-skitterphoto-404341.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.gifts.map((item) => (
          <Gift {...item} />
        ))}
      </div>
    );
  }
}

export default GiftList;
