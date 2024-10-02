import React from "react";
import "../Styles/About.css";
import Hero from "../Components/Hero";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="text-box">
        <Hero />
        <h3>Our Mission</h3>
        <strong>
          {" "}
          <p>
            To eliminate financial and organizational obstacles, enabling
            mentors and mentees to connect, collaborate, and grow together.
          </p>{" "}
        </strong>
        <h5>
          MVP is a dynamic and groundbreaking platform that enables mentors and
          mentees to foster each other's grouth through personal development
        </h5>
        <h3>For Mentees</h3>
        <strong>
          {" "}
          <p>
            {" "}
            To eliminate financial and organizational obstacles, enabling
            mentors and mentees to connect, collaborate, and grow together.
          </p>{" "}
        </strong>
        <h3>For Mentors</h3>
        <strong>
          {" "}
          <p>
            {" "}
            To eliminate financial and organizational obstacles, enabling
            mentors and mentees to connect, collaborate, and grow together.
          </p>{" "}
        </strong>
        <h3>Contributors</h3>
      </div>
      <div className="pic-container">
        <img src="" alt="" className="dev-pic" />
        <img src="" alt="" className="dev-pic" />
        <img src="" alt="" className="dev-pic" />
        <img src="" alt="" className="dev-pic" />
      </div>
    </div>
  );
};

export default About;
