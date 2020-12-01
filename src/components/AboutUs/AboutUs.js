import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="img-container">
        <div className="background-container">
          <h1 className="header-title">Our Mission</h1>
          <p className="header-message">
            Impulse the traditional commerce. Small and family own stores than
            don’t have a big online presence but have the best gifts for your
            budget and a lot of love to share!
          </p>
        </div>
        <div className="questions">
          <h1 className="question1">
            Do you know a family that owns a store with cool gifts? Contact us! with alert.
            Put here a cool form.
          </h1>
          <h1 className="question2">
            Do you need support? Speak directly with Oscar. Put here the image of Oscar with alert.
          </h1>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
