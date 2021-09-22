import React from "react";
import "./About.css";
import happylogo from "./Happyrecipe.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about_desc">
        <img src={happylogo} className="about_img" />
        <p>
          Happy Recipe is a website that provides recipe recommendations
          personalized to the individual's tastes, semantic recipe search, we
          have a large collection of many recipes to let you choose from. We
          like to mention that the Happy Recipe app will be available soon for
          both iOS and Android.
        </p>
      </div>
    </div>
  );
};

export default About;
