import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Enquiry from "./pages/Enquiry";
import AboutUs from "./pages/AboutUs";

function App() {
  console.log("Hello");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blogs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
