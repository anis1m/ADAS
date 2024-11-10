import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Navbar from "./InsideHomePage/Navbar";
import { useParams } from "react-router-dom";

function Blogs() {
  const { id } = useParams("id");
  const [blog, setblog] = useState(null);
  const [blogslength, setblogslength] = useState(0);

  useEffect(() => {
    fetch("/data.xml")
      .then((res) => res.text())
      .then((txt) => {
        const parser = new DOMParser();
        const xmldoc = parser.parseFromString(txt, "application/xml");
        const blogs = xmldoc.documentElement;
        const bloglist = blogs.getElementsByTagName("blog");

        setblogslength(Array.from(bloglist).length);

        for (let i = 0; i < bloglist.length; i++) {
          if (bloglist[i].getAttribute("id") === id) {
            setblog(bloglist[i]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <button
        id="gotopreviousblog"
        onClick={() => {
          const currentId = parseInt(id);
          const el = document.getElementById("gotopreviousblog");
          if (currentId > 0) {
            el.style.display = "block";
            window.location.href = `/blog/${currentId - 1}`;
          } else {
            el.style.display = "none";
          }
        }}
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button
        id="gotonextblog"
        onClick={() => {
          const currentId = parseInt(id);
          const el = document.getElementById("gotonextblog");

          if (currentId < blogslength - 1) {
            window.location.href = `/blog/${currentId + 1}`;
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        }}
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
      {blog ? (
        <section
          className="blogs"
          dangerouslySetInnerHTML={{ __html: blog.innerHTML }}
        ></section>
      ) : (
        <h2 style={{ margin: "5rem 40%" }}>Nothing here</h2>
      )}
    </>
  );
}

export default Blogs;
