// Components/Hero.jsx

import React from "react";
import "../Styles/Hero.css"; // Import the CSS file
import defaultProfile from "../assets/default.jpeg";
import { useLocation } from "react-router-dom";

const Hero = () => {

  const isProgressPage = useLocation().pathname.includes("progress");
  const isHomePage = useLocation().pathname === "/";

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-img-filter"></div>
        <span className="image-container">
          <img
            src="https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="mentor and mentee working together"
          />
          <div className="hero-small-text">
            {isHomePage ? "For mentors and Mentess" : null}
          </div>
          <div className="hero-large-text">
            {isHomePage ? 'Unearthing Mentorship Opportunities: Discover, Connect, Grow' : null}
          </div>
        </span>
      </div>

      {isProgressPage ? 
        <div className="connection-contact">

          <div className="hero-profile">
            <img src={defaultProfile} alt="" />
            <div className="hero-profile-info">
              <div className="hero-profile-name">John Doe</div>
              <div className="hero-profile-job">Web Developer</div>
            </div>
          </div>

          <div className="hero-contact">
            <div className="hero-contact-cal">Calender</div>
            <div className="hero-contact-message">Message</div>
            <div className="hero-contact-call">Zoom</div>
          </div>
        </div>
      : null}
    </div>
  );
};

export default Hero;
