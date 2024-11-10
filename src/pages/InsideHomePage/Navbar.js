import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const menuref = useRef();

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
        <aside ref={menuref}>
          <h3 onClick={() => nav("/")}>Home</h3>
          <h3 onClick={() => nav("/courses")}>Our Courses</h3>
          <h3>Team</h3>
          <h3>Testimonial</h3>
          <h3 onClick={() => nav("/about")}>About Us</h3>
          <h3 onClick={() => nav("/blogs")}>Blogs</h3>
          <h3>Contact Us</h3>
          <h3 onClick={() => nav("/enquiry")}>Enquiry</h3>
          <i class="fa-solid fa-magnifying-glass"></i>
        </aside>
        <button
          id="hamberger_menu"
          onClick={() => {
            if (menuref.current.style.display === "block") {
              menuref.current.style.display = "none";
            } else {
              menuref.current.style.display = "block";
            }
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
      <div className="belownavbar"></div>
    </>
  );
}

export default Navbar;
