import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import HowItWorksCards from "./HowItWorksCards";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="img-container-header">
        <NavBar />
        <div className="message">
          <h1 className="message-h1">The Frugal Santa</h1>
          <h2 className="message-h2">
            Do you have a secret santa and you don't know what to buy? No
            worries! Here you find original gifts from small and local
            businesses! <br></br>{" "}
            <span>Don't be broke, the Frugal Santa will help you!</span>
          </h2>
        </div>
        <div className="how-it-works">
          <div className="how-it-works-title">How it works?</div>
        </div>
        <div className="how-it-works-cards">
          <HowItWorksCards />
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/the-frugal-santa"
          className="button-start"
        >
          Let's Start
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
