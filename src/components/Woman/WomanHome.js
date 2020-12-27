import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./WomanGifts.css";
import "../Home/Home.css";

const WomanHome = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container-woman">
        <div className="background-container"></div>
      </div>
      <div className="budget-question">
        <h2> How much is your budget?</h2>
        <div className="buttons">
          <Link
            to="/womangifts10"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Under 10€
          </Link>

          <Link
            to="/womangifts20"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            10€-20€
          </Link>

          <Link
            to="womangifts50"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            20€-50€
          </Link>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default WomanHome;
