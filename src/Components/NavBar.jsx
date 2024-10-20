// Components/NavBar.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../Styles/NavBar.css";
import logo from "../assets/logo.png"
import hands from "../assets/hands.png"


const NavBar = ({ user, setUser, setToken }) => {
  

  const [showingCategories, toggleCategories] = useState(false);
  const [showingDeveleopment, toggleDevelopemnt] = useState(false);
  const [showingBusiness, toggleBusiness] = useState(false);
  const [showingFinance, toggleFinance] = useState(false);
  const [showingIT, toggleIT] = useState(false);
  const [showingOffice, toggleOffice] = useState(false);
  const [showingPersonal, togglePersonal] = useState(false);
  const [showingDesign, toggleDesign] = useState(false);
  const [showingMarketing, toggleMarketing] = useState(false);
  const [showingHealth, toggleHealth] = useState(false);
  const [showingMusic, toggleMusic] = useState(false);

  const categoriesList = {
    "Development": ["Web Development", "Mobile Development", "Programming Languages", "Game Development", "Database Design & Development", "Software Testing"],
    "Business": ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy"],
    "Finance & Accounting": ["Accounting & Bookkeping", "Cryptocurrency & Blockchain", "Finance", "Financial Modeling & Analysis", "Investing & Trading"],
    "IT & Software": ["IT Certifications", "Network & Security", "Hardware", "Operating Systems & Servers", "Other IT & Software"],      "Office Productivity": ["Microsoft", "Apple", "Google", "SAP", "Oracle", "Other Office Productivity"],
    "Personal Development": ["Personal Transformation", "Personal Productivity", "Leadership", "Career Development", "Parenting & Relationships"],
    "Design": ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D & Animation"],
    "Marketing": ["Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals", "Marketing Analytics & Animation"],
    "Health & Fitness": ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health"],
    "Music": ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques", "Music Software"]
  }

  const handleLogout = () => {
    setUser(null)
    setToken(null)
  }

  return(
    <div className='NavBar'>
      <Link to='/' className="nav-logo"><img src={logo} alt="mvp logo"/></Link>
      {/* <div className="nav-logo-text">MVP</div> */}
      <div className="nav-links">
        <Link to='/about' className="nav-about-button"><i class="fa-solid fa-circle-info"></i></Link>
        <Link to='/faq' className="nav-faq-button"><i class="fa-solid fa-circle-question"></i></Link>
        <Link to='/login' className="nav-login-button"><i class="fa-solid fa-right-to-bracket"></i></Link>
      </div>
    </div>
  );
};

export default NavBar;