// Components/CategoriesCarousel.jsx

import React from "react";
import "../Styles/CategoriesCarousel.css";

const CategoriesCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="category">
        <div className="image-placeholder"></div>
        <button>Subcategory 1</button>
      </div>
      <div className="category">
        <div className="image-placeholder"></div>
        <button>Subcategory 2</button>
      </div>
      <div className="category">
        <div className="image-placeholder"></div>
        <button>Subcategory 3</button>
      </div>
      <div className="category">
        <div className="image-placeholder"></div>
        <button>Subcategory 4</button>
      </div>
      <div className="progress-bar"></div>
    </div>
  );
};

export default CategoriesCarousel;
