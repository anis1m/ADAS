import React from "react";
import "./LocateUs.css";

function LocateUs() {
  return (
    <section className="locateUs">
      <h1>Locate Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14709.583917349113!2d79.08285223470898!3d21.147591644153373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c245241469%3A0x82003fb2dcc4943c!2sNagpur%20Junction%20railway%20station!5e0!3m2!1sen!2sin!4v1730791583954!5m2!1sen!2sin"
        style={{ border: "2px dashed gray" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default LocateUs;
