// Components/CategoriesCarousel.jsx

import React, { useState } from "react";

import "../Styles/CategoriesCarousel.css";

const CategoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 4 ? -1 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === -1 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <div
        className="carousel"
        style={{
          transform: `translateX(${-currentSlide * (100 / 3)}%)`, // Shows one item fully based on the index
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default CategoriesCarousel;
