import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Navbar from "./InsideHomePage/Navbar";
import { useParams } from "react-router-dom";

function Blogs() {
  const { id } = useParams("id");
  const [blog, setblog] = useState(null);

  useEffect(() => {
    fetch("/data.xml")
      .then((res) => res.text())
      .then((txt) => {
        const parser = new DOMParser();
        const xmldoc = parser.parseFromString(txt, "application/xml");
        const blogs = xmldoc.documentElement;
        const bloglist = blogs.getElementsByTagName("blog");

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
