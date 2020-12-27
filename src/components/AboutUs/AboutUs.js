import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container-about">
        <div className="background-container"></div>
        <div className="message-about">
          <p className="message-p">
            This is a fictional web app, however hopefully you can be inspired
            to buy locally! Buy in small and local stores than don’t have a big
            online presence but have the best gifts for your budget and a lot of
            love to share! <br></br>
            <span>
              There are amazing stores in your neighbourhood that need your
              support! Buy local!
            </span>
          </p>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/the-frugal-santa"
          className="button-start"
        >
          Go Back
        </Link>
      </div>
        </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
