import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} className="logo-f" alt="The Frugal Santa" />
      </div>
      <div className="row"></div>
      {/*     <h3 className="copyrights-text"> © Copyrights reserved 2020</h3> */}
    </div>
  );
}

export default Footer;
