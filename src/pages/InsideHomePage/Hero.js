import React, { useEffect, useRef } from "react";
import heroimage from "../../images/heroimage.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <figure>
        <img src={heroimage} />
      </figure>
      <blockquote>
        <b>Automotive Embedded System</b>
        <h1>
          Our mission is to implement Functional Safety in Advanced Driver
          Assistance Systems (ADAS)
        </h1>
        <h2>
          Join us on this journey of learning, growth and limitless
          possibilities in world of automobiles
        </h2>
        <button>Our Courses</button>
      </blockquote>
    </div>
  );
}

export default Hero;
