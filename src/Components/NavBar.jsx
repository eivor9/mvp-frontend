// Components/NavBar.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../Styles/NavBar.css";

const NavBar = () => {

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

  return(
    <div className='NavBar'>
      <div className="menu-button">HB</div>
      <Link to='/' className="nav-logo">LOGO</Link>

      <div className='nav-categories' onMouseEnter={() => toggleCategories(true)} onMouseLeave={() => toggleCategories(false)}>
        <div className="categories-button">Categories</div>
        {showingCategories ? 
          <div className="nav-categories-list">

            <div className='nav-category' style={showingDeveleopment ? {color: '#DFC853'}:null} onMouseEnter={() => toggleDevelopemnt(true)} onMouseLeave={() => toggleDevelopemnt(false)}>
                <div className="nav-category-label">Development</div>
                <div className='nav-subcategories'>
                  {showingDeveleopment ? 
                  <>
                    {categoriesList["Development"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
          
                  </>
                  : null}
                </div>
            </div>

            <div className='nav-category' style={showingBusiness ? {color: '#DFC853'}:null} onMouseEnter={() => toggleBusiness(true)} onMouseLeave={() => toggleBusiness(false)}>
                <div className="nav-category-label">Business</div>
                <div className='nav-subcategories'>
                  {showingBusiness ? 
                  <>
                    {categoriesList["Business"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingFinance ? {color: '#DFC853'}:null} onMouseEnter={() => toggleFinance(true)} onMouseLeave={() => toggleFinance(false)}>
                <div className="nav-category-label">Finance & Accounting</div>
                <div className='nav-subcategories'>
                  {showingFinance ? 
                  <>
                    {categoriesList["Finance & Accounting"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                    : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingIT ? {color: '#DFC853'}:null} onMouseEnter={() => toggleIT(true)} onMouseLeave={() => toggleIT(false)}>
                <div className="nav-category-label">IT & Software</div>
                <div className='nav-subcategories'>
                  {showingIT ? 
                  <>
                    {categoriesList["IT & Software"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)} 
                    
                    </>
                    : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingOffice ? {color: '#DFC853'}:null} onMouseEnter={() => toggleOffice(true)} onMouseLeave={() => toggleOffice(false)}>
                <div className="nav-category-label">Office Productivity</div>
                <div className='nav-subcategories'>
                  {showingOffice ? 
                  <>
                    {categoriesList["Office Productivity"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingPersonal ? {color: '#DFC853'}:null} onMouseEnter={() => togglePersonal(true)} onMouseLeave={() => togglePersonal(false)}>
                <div className="nav-category-label">Personal Development</div>
                <div className='nav-subcategories'>
                  {showingPersonal ? 
                  <>
                    {categoriesList["Personal Development"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingDesign ? {color: '#DFC853'}:null} onMouseEnter={() => toggleDesign(true)} onMouseLeave={() => toggleDesign(false)}>
                <div className="nav-category-label">Design</div>
                <div className='nav-subcategories'>
                  {showingDesign ? 
                  <>
                    {categoriesList["Design"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingMarketing ? {color: '#DFC853'}:null} onMouseEnter={() => toggleMarketing(true)} onMouseLeave={() => toggleMarketing(false)}>
                <div className="nav-category-label">Marketing</div>
                <div className='nav-subcategories'>
                  {showingMarketing ? 
                  <>
                    {categoriesList["Marketing"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingHealth ? {color: '#DFC853'}:null}onMouseEnter={() => toggleHealth(true)} onMouseLeave={() => toggleHealth(false)}>
                <div className="nav-category-label">Health & Fitness</div>
                <div className='nav-subcategories'>
                  {showingHealth ? 
                  <>
                    {categoriesList["Health & Fitness"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>  
                  : null}
                </div>
            </div>
            
            <div className='nav-category' style={showingMusic ? {color: '#DFC853'}:null} onMouseEnter={() => toggleMusic(true)} onMouseLeave={() => toggleMusic(false)}>
                <div className="nav-category-label">Music</div>
                <div className='nav-subcategories'>
                  {showingMusic ? 
                  <>
                    {categoriesList["Music"].map(subcategory => <div className='nav-subcategory' key={subcategory}>{subcategory}</div>)}
                    
                  </>
                  : null}
                </div>
            </div>

          </div> 
        :null}
      </div>

      <input type="text" placeholder='Search for Categories or People' className="search-bar" />

      <div className="nav-buttons">
        <Link to='/login' className="login-button">Log in</Link>
        <Link to='/signup' className="login-button signup-button">Sign up</Link>
      </div>
      
    </div>
  );
};

export default NavBar;