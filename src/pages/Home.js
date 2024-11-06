import React from "react";
import "./Home.css";
import Navbar from "./InsideHomePage/Navbar";
import Hero from "./InsideHomePage/Hero";
import Vision from "./InsideHomePage/Vision";
import Footer from "./InsideHomePage/Footer";
import OurBlogs from "./InsideHomePage/OurBlogs";
import OurCourses from "./InsideHomePage/OurCourses";
import LocateUs from "./InsideHomePage/LocateUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <OurBlogs />
      <OurCourses />
      <LocateUs />
      <Footer />
    </>
  );
}

export default Home;