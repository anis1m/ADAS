import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  return (
    <>
      <nav className="navbar">
        <img
          src={logo}
          onClick={() => {
            nav("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        <aside>
          <h3>Home</h3>
          <h3>Our Courses</h3>
          <h3>Team</h3>
          <h3>Testimonial</h3>
          <h3 onClick={() => nav("/about")}>About Us</h3>
          <h3>Blogs</h3>
          <h3>Contact Us</h3>
          <h3 onClick={() => nav("/enquiry")}>Enquiry</h3>
          <i class="fa-solid fa-magnifying-glass"></i>
        </aside>
      </nav>
      <div style={{ width: "100%", height: "150px" }}></div>
    </>
  );
}

export default Navbar;
