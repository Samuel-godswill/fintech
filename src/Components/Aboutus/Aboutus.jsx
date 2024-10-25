import React from "react";
import "./Aboutus.css";
import about from "../assets/about.png";
import flame from "../assets/flame.png";

const Aboutus = () => {
  return (
    <div className="about">
      <div className="about-container">
        <img className="aimg" src={about} alt="About Us illustration" />
        <div className="second-page">
          <p className="about-us">
            <img src={flame} alt="Flame icon" /> About Us
          </p>
          <h2>
            All Your Money <br /> Needs in One App
          </h2>
          <div className="sections">
            <section className="first-section">
              <h3>Expenses Tracker</h3>
              <p>Our comprehensive selection of medications,<br/> supplements, and healthcare products .</p>
            </section>
            <section>
              <h3>Crypto Connection</h3>
              <p>
              From advanced imaging technology such as MRI <br/> and CT scanners to precision surgical tools.
              </p>
            </section>
            <section>
              <h3>Automated Invoicing</h3>
              <p>
              We're committed to leveraging the latest <br/>innovations in medical technology.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
