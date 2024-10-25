import React from "react";
import "./Features.css";
import flame from "../assets/flame.png";
import arrow from "../assets/arrow-right.png";
import fea from "../assets/fea.png"

const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <div className="features-text">
          <p className="fea">
            <img className="imgg" src={flame} alt="Flame icon" /> featured
          </p>
          <h2>
            all features <br /> in one app
          </h2>
          <ul className="featured-list">
            <li>
              Get 3% cash back on everyday purchases, 2% on<br/> everything else4
            </li>
            <li className="second-li">
              Extra Spending Power when you have Rewards Checking<br/> through
              Upgrade6
            </li>
          </ul>
          <div className="button-container">
            <button className="btn">Get started</button>
            <img className="iimg" src={arrow} alt="" />
          </div>
        </div>
      <div className="features-image">
        <img src={fea} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Features;
