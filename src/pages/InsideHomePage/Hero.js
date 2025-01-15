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
        <h2>Auto Intellect</h2>
        <h1>
          Our mission is to empower professionals and beginners with
          cutting-edge expertise and practical application oriented knowledge in
          automotive functional safety and cybersecurity, fostering innovation
          and resilience in today's fast-paced mobility industry. We aim to
          groom a future-ready workforce committed to excellence and global
          safety standards.
        </h1>
        <h2>
          Empowering Professionals and Beginners with expertise in Automotive
          Functional Safety and Cyber Security
        </h2>
        <button>Our Courses</button>
      </blockquote>
    </div>
  );
}

export default Hero;
