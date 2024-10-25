import React from "react";
import "./Educator.css";
import mockup from "../assets/Mockup 1.png";
import mobile from "../assets/Mobile 1.png";
import globe from "../assets/globe.png";
import dashboard from "../assets/Dashboard 2.png";
import chart from "../assets/chart.png";
import workings from "../assets/workings.png";
import fx from "../assets/fx.png";
import price from "../assets/price.png";
import a from '../assets/a.png';
import b from '../assets/b.png'
import c from '../assets/c.png'
import arrow from '../assets/arrow-right.png'
import flame from '../assets/flame.png'

const Educator = () => {
  return (
    <div className="educator">
        <p className="about-us">
            <img src={flame} alt="Flame icon" /> services
          </p>
        <h2 className="eduh2">can help you achieve <br/> financial success</h2>
      <div className="header">
        <div className="image-wrapper">
          <img src={mockup} alt="Mockup" className="mockup" />
          <img src={mobile} alt="Mobile" className="mobile" />
        </div>
        <div className="text-wrapper">
          <img src={globe} alt="" />
          <h2>
            transfers across the <br /> globe are for free
          </h2>
        </div>
      </div>
      <div className="subheader">
        <div className="primary-content">
          <img className="fximg" src={fx} alt="" />
          <h2>
            create a card that is <br /> unique and customized
          </h2>
          <p>
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs. Our services include High-Yield Savings
            Accounts.
          </p>
          <img className="chart" src={chart} alt="" />
        </div>
        <div className="secondary-content">
          <img className="working" src={workings} alt="" />
          <h2>
            personalized insights <br /> and financial goals
          </h2>
          <p>
            savings accounts that offer competitive interest rates and flexible
            deposit options. Investment Invest wisely with our personalized.Our
            services include High-Yield Savings{" "}
          </p>
          <div class="image-container">
            <img className="dashboard" src={dashboard} alt="" />
            <img className="price" src={price} alt="" />
          </div>
        </div>
      </div>
      <div className="features">
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
      </div>
      <div className="button-container">
            <button className="btn">View More</button>
            <img className="butimg" src={arrow} alt="" />
          </div>

    </div>
  );
};

export default Educator;
