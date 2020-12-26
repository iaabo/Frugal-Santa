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
        <div className="background-container"></div>
      </div>
      <div className="budget-question">
        <h2> Who is your Secret Santa?</h2>
        <div className="buttons">
          <Link
            to="/woman"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Woman
          </Link>

          <Link
            to="/man"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Man
          </Link>

          <Link
            to="/child"
            className="button-menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Child
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
