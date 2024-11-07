import React, { useRef, useEffect } from "react";
import "./OurCourses.css";
import tagimg from "../../images/pngtree-blue-promotion-label-price-tag-png-image_4518487.png";

function OurCourses({bh,vh}) {
  const coursesref = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= bh+vh+150) {
        if (coursesref.current) {
          for (let i = 0; i < coursesref.current.length; i++) {
            coursesref.current[i].style.transform = "skew(0deg)";
            coursesref.current[i].style.transition = "transform 2s ease";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="our-courses">
        <h1>Our Courses</h1>
        <div>
          <aside ref={(el) => (coursesref.current[0] = el)}>
            <h2>Full stack Web Developer</h2>
            <p>(with MERN stack)</p>
            <blockquote>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationThickness: "3px",
                }}
              >
                <i class="fa-solid fa-indian-rupee-sign"></i> 9999
              </p>
              <figure>
                <img src={tagimg} />
                <h3>60% off</h3>
              </figure>
            </blockquote>
            <h1>
              <i class="fa-solid fa-indian-rupee-sign"></i> 3999
            </h1>
            <button>Proceed to Checkout</button>
            <ul>
              <li>Course duration is 6 months</li>
              <li>
                Full knowledge of MongoDB, ExpressJs, ReactJs and NodeJs will be
                provided
              </li>
              <li>
                Practical Sessions will be provided alongwith theory sessions
              </li>
              <li>2 to 3 live projects training will be provided</li>
              <li>Online/Offline batch</li>
              <li>Timing is from 10am to 5pm (Monday to Saturday)</li>
            </ul>
          </aside>
          <aside ref={(el) => (coursesref.current[1] = el)}>
            <h2>Full Stack Web Developer</h2>
            <p>(with Java Fullstack and MySQL)</p>
            <blockquote>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationThickness: "3px",
                }}
              >
                <i class="fa-solid fa-indian-rupee-sign"></i> 9999
              </p>
              <figure>
                <img src={tagimg} />
                <h3>50% off</h3>
              </figure>
            </blockquote>
            <h1>
              <i class="fa-solid fa-indian-rupee-sign"></i> 4999
            </h1>
            <button>Proceed to Checkout</button>
            <ul>
              <li>Course duration is 6 months</li>
              <li>
                Full knowledge of MySQL alongwith Java Servlet, JSP, and java
                web development framework (Springboot)
              </li>
              <li>
                Practical Sessions will be provided alongwith theory sessions
              </li>
              <li>2 to 3 live projects training will be provided</li>
              <li>Online/Offline batch</li>
              <li>Timing is from 10am to 5pm (Monday to Saturday)</li>
            </ul>
          </aside>
          <aside ref={(el) => (coursesref.current[2] = el)}>
            <h2>Full stack Android app Developer</h2>
            <p>(with Java, PHP and MySQL)</p>
            <blockquote>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationThickness: "3px",
                }}
              >
                <i class="fa-solid fa-indian-rupee-sign"></i> 9999
              </p>
              <figure>
                <img src={tagimg} />
                <h3>60% off</h3>
              </figure>
            </blockquote>
            <h1>
              <i class="fa-solid fa-indian-rupee-sign"></i> 3999
            </h1>
            <button>Proceed to Checkout</button>
            <ul>
              <li>Course duration is 6 months</li>
              <li>
                Full knowledge of MySQL, PHP alongwith Android app development
                with java using Android Studio
              </li>
              <li>
                Practical Sessions will be provided alongwith theory sessions
              </li>
              <li>2 to 3 live projects training will be provided</li>
              <li>Online/Offline batch</li>
              <li>Timing is from 10am to 5pm (Monday to Saturday)</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default OurCourses;
