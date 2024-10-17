// Components/NavBar.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../Styles/NavBar.css";
import logo3 from "../assets/logo3.png";
import mvp2 from "../assets/mvp2.png";

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

      <Link to='/' className="nav-logo"> <img src={mvp2} alt="" /> </Link>

      <a href="#CategoryDescriptions" className="nav-categories-button">Categories</a>

      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder='Search for anything' className="search-bar" />

      <Link to='/about' className="nav-about-button">About</Link>

      <Link to='/faq' className="nav-faq-button">FAQ</Link>

      <Link to='/login' className="nav-login-button">Login</Link>


    </div>
  );
};

export default NavBar;