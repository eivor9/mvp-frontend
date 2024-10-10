// Pages/Home.jsx

import React from "react";
import CategoriesCarousel from "../Components/CategoriesCarousel";
import Testimonials from "../Components/Testimonials";
import Hero from "../Components/Hero";
import "../Styles/Home.css";
import FAQ from "../Components/FAQ";


const Home = () => {
  return (
    <div className="Home">
      <Hero/>

      <div className="home-mission-statements">

        <div className="network-statement statement-container">
          <span>Find your network</span>Connect with professionals who share your passion for mentorship
        </div>

        <div className="free-statement statement-container">
          <span>Offered without fees</span>Providing personalized mentor/mentee connections without the usual obstacles
        </div>

        <div className="progress-statement statement-container">
          <span>Progress Tracking</span>Efficiently monitor progress with our streamlined tracking system
        </div>
      </div>

      {/* <CategoriesCarousel /> */}
      <FAQ/>
      <Testimonials />
    </div>
  );
};

export default Home;
