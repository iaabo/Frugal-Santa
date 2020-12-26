import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header className="landing-page">
        <div className="landing-elements">
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
