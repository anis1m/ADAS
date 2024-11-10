import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Enquiry from "./pages/Enquiry";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import AllBlogs from "./pages/AllBlogs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blogs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Routes>
    </>
  );
}

export default App;
