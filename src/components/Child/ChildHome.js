import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./ChildGifts.css";
import "../Home/Home.css";

const ChildHome = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container-child">
        <div className="background-container"></div>
      </div>
      <div className="budget-question">
        <h2> How much is your budget?</h2>
        <div className="buttons">
          <Link
            to="/childgifts10"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Under 10€
          </Link>

          <Link
            to="/childgifts20"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            10€-20€
          </Link>

          <Link
            to="childgifts50"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            20€-50€
          </Link>
        </div>
      </div>{" "}
      <Footer/>
    </div>
  );
};

export default ChildHome;
