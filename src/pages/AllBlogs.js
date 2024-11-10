import React, { useRef, useState, useEffect } from "react";
import "./AllBlogs.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./InsideHomePage/Navbar";

function AllBlogs() {
  const nav = useNavigate();
  const blogref = useRef([]);
  const [blogsdata, setblogsdata] = useState([]);
  useEffect(() => {
    fetch("/data.xml")
      .then((res) => res.text())
      .then((txt) => {
        const parser = new DOMParser();
        const xmldoc = parser.parseFromString(txt, "application/xml");
        const blogs = xmldoc.documentElement;
        const bloglist = blogs.getElementsByTagName("blog");
        const newBlogsData = [];
        for (let i = 0; i < bloglist.length; i++) {
          const trimmedblog = bloglist[i].innerHTML.substring(0, 350) + "...";
          newBlogsData.push(trimmedblog);
        }
        setblogsdata(newBlogsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <section className="our-blogs" style={{ transform: "none" }}>
        <mark>
          <i class="fa-solid fa-blog"></i>
          <h1>All Blogs</h1>
        </mark>
        <div>
          {blogsdata.length > 0 ? (
            blogsdata.map((blog, idx) => (
              <aside ref={(el) => (blogref.current[idx] = el)}>
                <figure dangerouslySetInnerHTML={{ __html: blog }}></figure>
                <button
                  onClick={() => {
                    nav(`/blog/${idx}`);
                  }}
                >
                  Read More
                </button>
              </aside>
            ))
          ) : (
            <h2>No Blogs</h2>
          )}
        </div>
      </section>
    </>
  );
}

export default AllBlogs;
