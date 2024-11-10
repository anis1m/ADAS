import React, { useEffect, useRef, useState } from "react";
import "./OurBlogs.css";
import { useNavigate } from "react-router-dom";

function OurBlogs({ hb, vh }) {
  const nav = useNavigate();
  const blogref = useRef([]);
  const [blogsdata, setblogsdata] = useState([]);
  const bh = useRef();

  useEffect(() => {
    if (bh.current) {
      hb(bh.current.scrollHeight);
      console.log(bh.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= vh + 900) {
        /*if (visionRef.current) {
          visionRef.current.style.transform = "translateX(0px)";
          visionRef.current.style.transition = "transform 1s ease";
        }*/
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
      <section class="our-blogs" ref={bh}>
        <mark>
          <i class="fa-solid fa-blog"></i>
          <h1>Our Blogs</h1>
        </mark>
        <div>
          {blogsdata.length > 0 ? (
            blogsdata.slice(0, 3).map((blog, idx) => (
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
            <h2 style={{ margin: "5rem auto" }}>No Blogs</h2>
          )}
        </div>
        <button id="seemorecourses" onClick={() => nav("/blogs")}>
          See All Blogs
        </button>
      </section>
    </>
  );
}

export default OurBlogs;
