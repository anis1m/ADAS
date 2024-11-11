import React, { useEffect, useRef, useState } from "react";
import "./OurBlogs.css";
import { useNavigate } from "react-router-dom";

function OurBlogs({ hb, vh }) {
  const nav = useNavigate();
  const blogref = useRef();
  const [blogsdata, setblogsdata] = useState([]);
  const bh = useRef();
  const combinedref = (el) => {
    bh.current = el;
    blogref.current = el;
  };

  useEffect(() => {
    if (bh.current) {
      hb(bh.current.scrollHeight);
      console.log(bh.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= vh + 750) {
        if (blogref.current) {
          blogref.current.style.transform = "translateX(0px)";
          blogref.current.style.transition = "transform 2s ease";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [vh]);

  useEffect(() => {
    fetch("/blogs.xml")
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
      <section class="our-blogs" ref={combinedref}>
        <mark>
          <i class="fa-solid fa-blog"></i>
          <h1>Our Blogs</h1>
        </mark>
        <div>
          {blogsdata.length > 0 ? (
            blogsdata.slice(0, 3).map((blog, idx) => (
              <aside>
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
