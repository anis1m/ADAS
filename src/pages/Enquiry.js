import React, { useRef, useState } from "react";
import "./Enquiry.css";
import Navbar from "./InsideHomePage/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Enquiry() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: 0,
    gender: "",
    course: "",
    profession: "",
    qualification: "",
    subject: "",
    description: "",
    image: null,
  });

  const [loading, setloading] = useState(false);
  const formref = useRef();

  function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    const form = new FormData();
    for (const key in formdata) {
      if (formdata[key] !== null && formdata.hasOwnProperty(key)) {
        form.append(key, formdata[key]);
      }
    }
    const url = "http://localhost/sendmail/sendmailwithattachment.php";
    axios
      .post(url, form)
      .then((res) => {
        toast.success("Submitted Successfully. Admin will contact you soon", {
          position: "bottom-center",
        });
        setloading(false);
        formref.current.reset();
      })
      .catch((err) => {
        toast.error("Failed to submit", {
          position: "bottom-center",
        });
        setloading(false);
      });
  }

  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="enquiry">
        <h1>Enquiry form</h1>
        <form onSubmit={handlesubmit} ref={formref}>
          <blockquote>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) =>
                setformdata({ ...formdata, name: e.target.value })
              }
              onInput={(e) => {
                const input = e.target;
                const value = input.value;
                input.value = value.replace(/[^a-zA-Z\s]/g, "");
              }}
              required
            />
          </blockquote>
          <blockquote>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={(e) =>
                setformdata({ ...formdata, email: e.target.value })
              }
              required
            />
          </blockquote>
          <blockquote>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter Phone Number with country code (without '+' symbol)"
              onChange={(e) =>
                setformdata({ ...formdata, phone: e.target.value })
              }
              onInput={(e) => {
                const input = e.target;
                let value = input.value;
                value = value.replace(/[^0-9]/g, "");
                if (value.length > 12) {
                  value = value.slice(0, 12);
                }

                input.value = value;
              }}
              required
            />
          </blockquote>
          <blockquote>
            <label>Gender</label>
            <select
              onChange={(e) =>
                setformdata({ ...formdata, gender: e.target.value })
              }
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </blockquote>

          <blockquote>
            <label>Course</label>
            <select
              onChange={(e) =>
                setformdata({ ...formdata, course: e.target.value })
              }
              required
            >
              <option value="">Select Course Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </blockquote>
          <blockquote>
            <label>Domain/Profession</label>
            <input
              type="text"
              placeholder="Your Present domain/profession"
              onChange={(e) =>
                setformdata({ ...formdata, profession: e.target.value })
              }
              required
            />
          </blockquote>
          <blockquote>
            <label>Qualification</label>
            <select
              onChange={(e) =>
                setformdata({ ...formdata, qualification: e.target.value })
              }
              required
            >
              <option value="">Select Qualification</option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </blockquote>
          <blockquote>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter Query Subject"
              onChange={(e) =>
                setformdata({ ...formdata, subject: e.target.value })
              }
              required
            />
          </blockquote>
          <blockquote>
            <label>Description</label>
            <textarea
              rows={10}
              placeholder="Enter Query Description"
              onChange={(e) =>
                setformdata({ ...formdata, description: e.target.value })
              }
              required
            ></textarea>
          </blockquote>
          <blockquote>
            <input
              type="file"
              accept="image/*"
              placeholder="Upload query image or screenshot"
              onChange={(e) =>
                setformdata({ ...formdata, image: e.target.files[0] })
              }
              required
            />
          </blockquote>
          <button type="submit">
            {loading ? (
              <i
                class="fa-solid fa-spinner fa-spin"
                style={{ fontSize: "1.5rem" }}
              ></i>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default Enquiry;
