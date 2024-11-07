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
  <section style={{width:"100%", overflow:"hidden"}}>
    <section className="vision" ref={visionRef}>
      <h2>
        <i class="fa-solid fa-suitcase"></i> Our Vision
      </h2>
      <h1>Why Choose Auto Intellect?</h1>
      <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
        In an increasingly specialized world, niche learning has never been more critical. At Auto Intellect, we lead this transformation, empowering professionals in the automotive cybersecurity and functional safety sectors. Here’s why choosing us is the best decision for your career and your organization:
      </p>
      <div>
        <aside ref={(el) => (skewref.current[0] = el)}>
          <h2>Unmatched Expertise and Comprehensive Curriculum</h2>
          <ul>
            <li>
              Our meticulously designed curriculum covers every essential aspect of automotive cybersecurity and functional safety.
            </li>
            <li>From theoretical foundations to practical applications, we equip our learners to tackle the industry’s most pressing challenges.</li>
            <li>
              Our specialized modules explore cutting-edge topics like V2X communication, autonomous vehicles, and AI integration, ensuring you stay ahead of the curve.
            </li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[1] = el)}>
          <h2>Strategic Industry Collaborations</h2>
          <ul>
            <li>We believe in education that connects deeply with industry needs.</li>
            <li>Our strategic partnerships with leading automotive manufacturers, OEMs, and cybersecurity firms ensure our curriculum aligns with the latest industry standards and practices.</li>
            <li>
              Regular guest lectures, workshops, and panel discussions with industry experts offer invaluable real-world insights and networking opportunities.
            </li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[2] = el)}>
          <h2>Agile Learning Methodologies</h2>
          <ul>
            <li>Modern, well-equipped training spaces</li>
            <li>Interactive and immersive learning experiences</li>
            <li>Technology-enhanced training tools</li>
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[3] = el)}>
          <h2>Proven Track Record</h2>
          <ul>
            <li>At Auto Intellect, we embrace Agile Learning Frameworks that promote continuous improvement and adaptability.</li>
            <li>Our iterative learning cycles and hands-on training sessions using real-world scenarios refine your skills and help you stay agile in a rapidly evolving industry.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[4] = el)}>
          <h2>Tailored Training Programs</h2>
          <ul>
            <li>We recognize that every organization has unique requirements. </li>
            <li>That's why we offer customized training solutions to meet your specific needs. Whether you prefer in-person or online formats, we provide the flexibility necessary for effective workforce upskilling.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[5] = el)}>
          <h2>Innovative Learning Tools</h2>
          <ul>
            <li>Our commitment to innovation extends to our learning tools. We utilize virtual labs, simulations, and interactive platforms to create an immersive and engaging experience.</li>
            <li>Gamification techniques foster a competitive yet collaborative environment, motivating you to achieve your best.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[6] = el)}>
          <h2>Continuous Professional Development</h2>
          <ul>
            <li>Our certification programs in automotive cybersecurity and functional safety enhance your credibility while addressing industry skill gaps.</li>
            <li>Our robust alumni network offers ongoing support, mentorship, and resources for your continued professional growth.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[7] = el)}>
          <h2>Research and Knowledge Sharing</h2>
          <ul>
            <li>We cultivate a culture of research and innovation, encouraging learners to explore and contribute to the latest issues in automotive cybersecurity and functional safety.</li>
            <li>By publishing white papers, case studies, and insights, we share our knowledge with the broader automotive ecosystem, driving industry-wide advancements.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[8] = el)}>
          <h2>Proven Outcomes and Impact</h2>
          <ul>
            <li>Choosing Auto Intellect means preparing for a future where you can lead.</li>
            <li>Our programs enhance workforce readiness, strengthen industry-academia relationships, and build a community of well-trained professionals ready to drive the future of automotive cybersecurity and functional safety.</li>
            
          </ul>
        </aside>
        <aside ref={(el) => (skewref.current[9] = el)}>
          <h2>Join Us in Shaping the Future</h2>
          <ul>
            <li>At Auto Intellect, we are not just bridging the gap between education and industry; we are redefining it.</li>
            <li>Our mission is to connect, learn, and innovate, ensuring you are prepared for the workforce and poised to drive industry trends forward.</li>
            <li>Join us in our vision to transform the future of automotive innovation through tailored learning experiences. </li>
            <li>Together, we can navigate the complexities of the automotive landscape and pave the way for a safer, more secure future.</li>
            <li>Feel the excitement, embrace the challenge, and become part of the revolution at Auto Intellect. </li>
            <li>Your journey to mastering automotive cybersecurity and functional safety starts here.</li>
          </ul>
        </aside>
      </div>
    </section>
  </section>
  );
}

export default Vision;
