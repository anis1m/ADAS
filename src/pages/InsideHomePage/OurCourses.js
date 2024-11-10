import React, { useRef, useEffect, useState } from "react";
import "./OurCourses.css";
import tagimg from "../../images/pngtree-blue-promotion-label-price-tag-png-image_4518487.png";
import { useNavigate } from "react-router-dom";

function OurCourses({ bh, vh }) {
  const coursesref = useRef();
  const [courses, setcourses] = useState([]);
  const nav = useNavigate();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= bh + vh + 500) {
        if (coursesref.current) {
          coursesref.current.style.transform = "translateX(0px)";
          coursesref.current.style.transition = "transform 2s ease";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bh, vh]);
  return (
    <>
      <section className="our-courses" ref={coursesref}>
        <h1>Our Courses</h1>
        <div>
          {courses.length > 0 ? (
            courses
              .slice(0, 3)
              .map((course) => (
                <aside
                  dangerouslySetInnerHTML={{ __html: course.innerHTML }}
                ></aside>
              ))
          ) : (
            <h2 style={{ margin: "5rem auto" }}>No Courses</h2>
          )}
        </div>

        <button id="seemorecourses" onClick={() => nav("/courses")}>
          See All Courses
        </button>
      </section>
    </>
  );
}

export default OurCourses;
