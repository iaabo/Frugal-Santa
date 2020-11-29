import React from "react";
import { Link } from "react-router-dom";
import landingPage from "../../assets/landingPage.mp4";
import logo from "../../assets/logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header className="landing-page">
        <video autoPlay loop muted className="video">
          <source src={landingPage} type="video/mp4" />
        </video>
        <div className="landing-elements">
          <img src={logo} className="logo" />
          <button className="button-start">
            <Link
              style={{ textDecoration: "none", color: "#5E616A" }}
              to="/the-frugal-santa"
            >
              Explore
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
