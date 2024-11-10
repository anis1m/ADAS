import React, { useState, useEffect } from "react";
import "./Courses.css";
import Navbar from "./InsideHomePage/Navbar";

function Courses() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    fetch("/courses.xml")
      .then((res) => res.text())
      .then((txt) => {
        const parser = new DOMParser();
        const xmldoc = parser.parseFromString(txt, "application/xml");
        const courses = xmldoc.documentElement;
        const courseslist = courses.getElementsByTagName("course");

        setcourses(Array.from(courseslist));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <section className="our-courses" style={{ transform: "none" }}>
        <h1>Our Courses</h1>
        <div>
          {courses.map((course) => (
            <aside
              dangerouslySetInnerHTML={{ __html: course.innerHTML }}
            ></aside>
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
