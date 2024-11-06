import React, { useEffect, useRef } from "react";
import "./Vision.css";

function Vision() {
  const visionRef = useRef(null);
  const skewref = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        if (visionRef.current) {
          visionRef.current.style.transform = "translateX(0px)";
          visionRef.current.style.transition = "transform 1s ease";
        }
        if (skewref.current) {
          for (let i = 0; i < skewref.current.length; i++) {
            skewref.current[i].style.transform = "skew(0deg)";
            skewref.current[i].style.transition = "transform 2s ease";
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
    <section className="vision" ref={visionRef}>
      <h2>
        <i class="fa-solid fa-suitcase"></i> Our Vision
      </h2>
      <h1 style={{ fontSize: "3rem" }}>Why Choose Us?</h1>
      <b style={{ fontSize: "1.1rem", textAlign: "center" }}>
        At ADAS, we differentiate ourselves through our unique blend of
        expertise, experience, and innovative training approaches. Here are just
        a few reasons why we stand out:
      </b>
      <div>
        <aside ref={(el) => (skewref.current[0] = el)}>
          <h2>Unparalleled Expertise</h2>
          <ul>
            <li>
              15+ years of experience in corporate, vehicle security, and IT
              domains
            </li>
            <li>Industry-leading instructors with real-world expertise</li>
            <li>
              Continuous professional development ensures our knowledge stays
              current
            </li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[1] = el)}>
          <h2>Customized Training Solutions</h2>
          <ul>
            <li>Tailored programs addressing your specific needs and goals</li>
            <li>Flexible delivery formats (in-person, online, blended)</li>
            <li>
              Collaborative approach ensures seamless integration with your
              organization
            </li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[2] = el)}>
          <h2>State-of-the-Art Facilities</h2>
          <ul>
            <li>Modern, well-equipped training spaces</li>
            <li>Interactive and immersive learning experiences</li>
            <li>Technology-enhanced training tools</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[3] = el)}>
          <h2>Proven Track Record</h2>
          <ul>
            <li>Consistently high participant satisfaction ratings</li>
            <li>Measurable improvement in skills and knowledge</li>
            <li>Long-term partnerships with leading organizations</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[4] = el)}>
          <h2>Industry Recognition</h2>
          <ul>
            <li>Certified training programs</li>
            <li>Partnerships with renowned industry associations</li>
            <li>Compliance with international standards</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[5] = el)}>
          <h2>Dedicated Support</h2>
          <ul>
            <li>Personalized attention from experienced instructors</li>
            <li>Ongoing mentorship and coaching</li>
            <li>Post-training support and resources</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[6] = el)}>
          <h2>Cutting-Edge Curriculum</h2>
          <ul>
            <li>Protection for the Next-Generation of Vehicles training</li>
            <li>Emerging technologies and trends</li>
            <li>Soft skills development for holistic growth</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[7] = el)}>
          <h2>What Sets Us Apart ?</h2>
          <ul>
            <li>Unique blend of theoretical and practical knowledge</li>
            <li>Emphasis on hands-on experience and real-world application</li>
            <li>Passionate commitment to empowering professionals</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Vision;
