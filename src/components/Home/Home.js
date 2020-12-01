import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container">
        <div className="background-container">
          <h1 className="header-message">
            Gifts for all wallets! Say Hello to the Frugal Santa. Choose your
            budget and see the cool gifts we selected for you. Impress your
            Secret Santa!
          </h1>
        </div>
      </div>
      <div className="budget-question">
        <h2> How much is your budget?</h2>
        <div className="buttons">
          <button className="button-menu">
            <Link to="/gifts10">Under 10€</Link>
          </button>
          <button className="button-menu">
            <Link to="/gifts20">10€-20€</Link>
          </button>
          <button className="button-menu">
            <Link to="gifts50">20€-50€</Link>
          </button>
          
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Home;
