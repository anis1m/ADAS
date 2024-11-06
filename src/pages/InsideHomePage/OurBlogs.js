import React, { useEffect, useRef, useState } from "react";
import "./OurBlogs.css";
import { useNavigate } from "react-router-dom";

function OurBlogs() {
  const nav = useNavigate();
  const blogref = useRef([]);
  const [blogsdata, setblogsdata] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1500) {
        /*if (visionRef.current) {
          visionRef.current.style.transform = "translateX(0px)";
          visionRef.current.style.transition = "transform 1s ease";
        }*/
        if (blogref.current) {
          for (let i = 0; i < blogref.current.length; i++) {
            blogref.current[i].style.transform = "skew(0deg)";
            blogref.current[i].style.transition = "transform 2s ease";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <section class="our-blogs">
        <mark>
          <i class="fa-solid fa-blog"></i>
          <h1>Our Blogs</h1>
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

export default OurBlogs;
