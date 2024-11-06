import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <aside>
          <img src={logo} />
          <figure>
            <i class="fa-brands fa-facebook" style={{ color: "blue" }}></i>
            <i class="fa-brands fa-x-twitter" style={{ color: "black" }}></i>
            <i
              class="fa-brands fa-instagram"
              style={{ color: "orangered" }}
            ></i>
            <i class="fa-brands fa-linkedin" style={{ color: "darkblue" }}></i>
            <i class="fa-brands fa-youtube" style={{ color: "red" }}></i>
          </figure>
        </aside>
        <aside>
          <h1>Quick Links</h1>
          <a href="">Courses</a>
          <a href="">About Us</a>
          <a href="">Our Blog</a>
          <a href="">Team</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
        </aside>
        <aside>
          <h1>Contact Us</h1>

          <blockquote>
            <figure>
              <i class="fa-solid fa-phone" style={{ fontSize: "1.3rem" }}></i>
              <h3>Contact</h3>
            </figure>
            <p>00-0000000000</p>
          </blockquote>
          <blockquote>
            <figure>
              <i
                class="fa-solid fa-envelope"
                style={{ fontSize: "1.3rem" }}
              ></i>
              <h3>Email</h3>
            </figure>
            <p>contact@gmail.com</p>
          </blockquote>
        </aside>
      </footer>
      <footer className="belowfooter">
        <h4>Copyright &copy; 2024 ADAS Corporation. All Rights Reserved</h4>
      </footer>
    </>
  );
}

export default Footer;
