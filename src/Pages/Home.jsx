// Pages/Home.jsx

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import CategoriesCarousel from "../Components/CategoriesCarousel";
// import Testimonials from "../Components/Testimonials";
// import Hero from "../Components/Hero";
import "../Styles/Home.css";
// import FAQ from "../Components/FAQ";
import home_mentee_welcome from "../assets/home_mentee_welcome.jpg";
import home_mentor_welcome from "../assets/home_mentor_welcome.png";
import { Link } from "react-router-dom";
import CategoryDescriptions from "../Components/CategoryDescriptions";


const Home = () => {
  const [showingMentorWelcome, setShowingMentorWelcome] = useState(false);
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="Home">
      {message && <div className="success-message">{message}</div>}

      <div className="home-welcome-container">
        <div className="home-welcome-container-left">
          <div className="home-welcome-header">
            {showingMentorWelcome ? (
              <>Guide new developers - <br/><span>Get Connected</span></>
            ) : (
              <>Free Guidance from<br/><span>Real Web Devs</span></>
            )}
          </div>
          <div className="home-welcome-statement">
            {showingMentorWelcome ? (
              <>Volunteer to mentor aspiring web developers, guiding them into technology careers. Connect with like-minded individuals to share knowledge, resources, and foster a supportive tech community.</>
            ) : (
              <>Connect with professional web developers for free mentorship, offering guidance on skills, best practices, and insights to advance your career.</>
            )}
          </div>

          {showingMentorWelcome ? 
            <Link to='/mentor-signup' className="home-signup">Join the team</Link>
          :
            <Link to='/mentee-signup' className="home-signup">Start your journey</Link>
          }
          
          <div className="home-welcome-buttons">
            <div onClick={() => setShowingMentorWelcome(!showingMentorWelcome)} className="home-welcome-button"><i className="fa-solid fa-chevron-left"></i></div>
            <div onClick={() => setShowingMentorWelcome(!showingMentorWelcome)} className="home-welcome-button"><i className="fa-solid fa-chevron-right"></i></div>
          </div>
        </div>

        <div className="home-welcome-container-right">
          <img src={showingMentorWelcome ? home_mentor_welcome : home_mentee_welcome} alt="" />
        </div>
      </div>

      <div className="professional-skills-header">
        All the skills you need in one place<br/>
        <span>From technical skills to interview prep, our volunteers are here to support your professional development</span>
      </div>

      <CategoryDescriptions/>
    </div>
  );
};

export default Home;
