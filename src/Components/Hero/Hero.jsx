import React from "react";
import "./Hero.css";
import heroimg from "../assets/heroimg.png";
import arrow from "../assets/arrow-right.svg";
import flame from "../assets/flame.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <p className="about-us">
            <img src={flame} alt="Flame icon" /> 100% trusted platform
          </p>
          <h1>
            FINANCE WITH <br /> SECURITY AND <br /> <span>FLEXIBILITY</span>
          </h1>
          <p>
            no-fee checking account with cash back rewards. Enjoy fee-free
            banking and earn cash back on your everyday purchases.
          </p>
          <div className="hero-button">
            <button>Open Account</button>
            <img className="himg" src={arrow} alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-img" src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
