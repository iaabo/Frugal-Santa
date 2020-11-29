import React from "react";
import Gift from "./Gift";
import "../Home/Home.css";

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
      {
        id: 6,
        title: "Blue Agenda",
        price: 8.79,
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
        description: "A scent of Pine Forest.",
        category: "woman",
        image:
          "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-3270223.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
      {
        id: 8,
        title: "Water bottle",
        price: 7.89,
        description: "Black reusable water bottle. Free BPA.",
        category: "man",
        image:
          "https://images.pexels.com/photos/3738062/pexels-photo-3738062.jpeg?cs=srgb&dl=pexels-cottonbro-3738062.jpg&fm=jpg",
        url: "https://www.linkedin.com/in/inesbarroso/",
      },
    ],

    /* giftCategory: [], */
  };

  /* handleBtns = (event) => {
let giftCategory;
if(event.target.value==="All"){
    giftCategory=this.state.products;
}
else {
    giftCategory=this.state.giftCategory.filter(item => item.category===event.target.value)
    this.setState({giftCategory : giftCategory})
} 
    
    
} */

  render() {
    return (
      <div>
        <div className="budget-question">
          <button value="woman" className="button-menu">
            Woman
          </button>
          <button value="man" className="button-menu">
            Man
          </button>
          <button value="kids" className="button-menu">
            Kids
          </button>
          <button value="all" className="button-menu">
            All
          </button>
        </div>
        <div>
          {this.state.gifts.map((item) => (
            <Gift {...item} /* handleBtns={this.handleBtns} */ />
          ))}
        </div>
      </div>
    );
  }
}

export default GiftList;
