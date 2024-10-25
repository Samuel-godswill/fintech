import React from "react";
import "./Testimonials.css";
import flame from '../assets/flame.png'
import mike from '../assets/mike.png'
import richard from '../assets/richard.png'
import thomas from '../assets/thomas.png'
import arrow from '../assets/arrow-right.png'

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <p className="about-us">
          <img src={flame} alt="Flame icon" /> testimonial
        </p>
        <h1>get to know our clients</h1>
        <div className="testimonial-flex">
          <img src={mike} alt="Mike's testimonial" />
          <img src={richard} alt="Richard's testimonial" />
          <img src={thomas} alt="Thomas's testimonial" />
        </div>
        <div className="button-container">
            <button className="btn">View More</button>
            <img src={arrow} alt="" />
          </div>
      </div>
    </div>
  );
};
