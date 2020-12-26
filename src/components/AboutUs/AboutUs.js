import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import local from "./local.jpg";
import local2 from "./local2.jpg";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container-about">
        <div className="background-container"></div>
        <div className="questions">
          <p className="question1">
            This is a fictional web app, however hopefully you can be inspired to buy
            locally! Buy in small and local stores than don’t have a big online
            presence but have the best gifts for your budget and a lot of love
            to share!
          </p>
          <p className="question1">
            There are amazing stores in your neighbourhood that need your support!
            Buy local!
          </p>
          <div className="pictures">
            <img src={local} alt="" />
            <img src={local2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
