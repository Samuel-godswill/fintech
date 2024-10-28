import React from "react";
import "./Start.css";
import arrow from "../assets/arrow-right.svg";
import start from "../assets/start.png";

const Start = () => {
  return (
    <div className="start">
      <div className="start-container">
        <div className="start-text">
          <h2>
            are you ready to <br /> start
          </h2>
          <p className="start-list">
            Personalize your settings, follow your progress, archive your
            <br /> highlights and notes automatically Glose is the ultimate
            reading
          </p>
          <div className="start-button">
            <button>Get started</button>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="start-image">
          <img src={start} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Start;
