import React, {useState} from "react";
import "./Home.css";
import Navbar from "./InsideHomePage/Navbar";
import Hero from "./InsideHomePage/Hero";
import Vision from "./InsideHomePage/Vision";
import Footer from "./InsideHomePage/Footer";
import OurBlogs from "./InsideHomePage/OurBlogs";
import OurCourses from "./InsideHomePage/OurCourses";
import LocateUs from "./InsideHomePage/LocateUs";

function Home() {

  const [blogsheight, setblogsheight]= useState(0);
  const [visionheight, setvisionheight]= useState(0);
  return (
    <>
      <Navbar />
      <Hero />
      <Vision  hv={setvisionheight}/>
      <OurBlogs  hb={setblogsheight} vh={visionheight} />
      <OurCourses bh={blogsheight} vh={visionheight}/>
      <LocateUs />
      <Footer />
    </>
  );
}

export default Home;
