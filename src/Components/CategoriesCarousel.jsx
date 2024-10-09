// Components/CategoriesCarousel.jsx

import React, { useState } from "react";
import "../Styles/CategoriesCarousel.css";

const CategoriesCarousel = () => {

  const categories = {
    "Development": ["Web Development", "Mobile Development", "Programming Languages", "Game Development", "Database Design & Development", "Software Testing"],
    "Business": ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy"],
    "Finance & Accounting": ["Accounting & Bookkeping", "Cryptocurrency & Blockchain", "Finance", "Financial Modeling & Analysis", "Investing & Trading"],
    "IT & Software": ["IT Certifications", "Network & Security", "Hardware", "Operating Systems & Servers", "Other IT & Software"],
    "Office Productivity": ["Microsoft", "Apple", "Google", "SAP", "Oracle", "Other Office Productivity"],
    "Personal Development": ["Personal Transformation", "Personal Productivity", "Leadership", "Career Development", "Parenting & Relationships"],
    "Design": ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D & Animation"],
    "Marketing": ["Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals", "Marketing Analytics & Animation"],
    "Health & Fitness": ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health"],
    "Music": ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques", "Music Software"]
}

  const [homeCategories, setHomeCategories] = useState(["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity"]);
  const [selectedCategory, setSelectedCategory] = useState("Development");

  const createFiveRandomCategories = () => {
    const categoriesArray = Object.entries(categories);
    let randomCategories = [];
    for (let i = 0; i < 5; i++){
      const randomIndex = Math.floor(Math.random() * categoriesArray.length);
      if (!randomCategories.includes(randomIndex))
        randomCategories.push(randomIndex);
      else i--;
    }

    randomCategories = randomCategories.map(categoryIndex => categoriesArray[categoryIndex][0]);

    () => setHomeCategories(randomCategories);
  }

  return (
    <div className="CategoriesCarousel">
      <div className="carousel-categories">
        {homeCategories.map(category => <div onClick={() => setSelectedCategory(category)} style={selectedCategory === category ? {color: "black"} : null} className="home-category" key={category}>{category}</div>)}
      </div>
      <div className="carousel-subcategories">
        {categories[selectedCategory].map(subcategory => <div className="home-subcategory" key={subcategory}>
          <img className="home-subcategory-picture" src="" alt={subcategory + " picture"} />
          <div className="home-subcategory-label">{subcategory}</div>
        </div>)}
      </div>
    </div>
  );
};

export default CategoriesCarousel;
