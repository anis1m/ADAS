import React from "react";
import "./AboutUs.css";
import Navbar from "./InsideHomePage/Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="aboutUs">
        <div>
          <h1>Welcome to Auto Intellect</h1>
          <p>
            At Auto Intellect, we empower professionals to excel in the rapidly evolving
            corporate landscape. Our cutting-edge training programs are designed
            to equip individuals with the knowledge, skills, and expertise
            needed to thrive in today's competitive environment.
          </p>
          <h2>Our Expertise</h2>
          <p>
            Our team of seasoned professionals boasts over 15 years of
            experience in corporate, vehicle security, and IT domains. Our
            instructors have a proven track record of delivering high-impact
            training solutions that drive business results.
          </p>
          <h2>Protection for the Next-Generation of Vehicles Training</h2>
          <p>
            Stay ahead of emerging threats with our specialized training
            program, focusing on:
          </p>
          <ul>
            <li>Vehicle cybersecurity</li>
            <li>Autonomous vehicle security</li>
            <li>Electric vehicle safety</li>
            <li>Advanced driver-assistance systems (ADAS)</li>
          </ul>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Industry-leading instructors with real-world expertise</li>
            <li>Customized training solutions tailored to your needs</li>
            <li>State-of-the-art training facilities</li>
            <li>Interactive and immersive learning experiences</li>
            <li>Continuous support and mentorship</li>
          </ul>
          <h2>Our Mission</h2>
          <ul>
            <li>
              To bridge the skills gap and foster a culture of continuous
              learning, enabling professionals to succeed in an ever-evolving
              corporate landscape.
            </li>
          </ul>
          <h2>Get in Touch</h2>
          <p>
            Contact us to discover how Auto Intellect can help you
            achieve your professional goals.
          </p>
          <ul className="contactUsinAboutUs">
            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:aftabmaldar1201@gmail.com">
                aftabmaldar1201@gmail.com
              </a>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>+91 7588995299
            </li>
            <li>
              <i class="fa-solid fa-contact-card"></i>123 Main St, Anytown, USA
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
