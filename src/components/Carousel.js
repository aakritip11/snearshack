import React, { useState, useEffect } from 'react';
import c1 from "../images/carousel1.png"
import c2 from "../images/carousel2.png"
import c3 from "../images/carousel3.png"
import c4 from "../images/carousel4.png"
import c5 from "../images/carousel5.png"
import c6 from "../images/carousel6.png"
import c7 from "../images/carousel7.png"


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    c1, c2, c3, c4, c5, c6, c7
  ];

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 2500); // Change image every 3 seconds

    return () => {
      clearInterval(timer); // Cleanup timer when component unmounts
    };
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;