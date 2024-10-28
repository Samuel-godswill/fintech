import React from "react";
import "./Security.css";
import securityimg from "../assets/security.png";
import arrow from "../assets/arrow-right.svg";
import flame from '../assets/flame.png'

const Security = () => {
  return (
    <div className="security">
      <div className="security-container">
        <img className="etc" src={securityimg} alt="" />
        <div className="securityinfo">
        <p className="about-us">
            <img src={flame} alt="Flame icon" /> trustworthiness
          </p>
          <h1>
            WE VALUE YOUR TRUST <br /> AND SECURITY
          </h1>
          <p>
            Our mission is to make finance more accessible, transparent, and
            secure for everyone. With cutting.
          </p>
          <div className="security-button">
            <button>Get started</button>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
