import React, { useState, useEffect } from 'react';

const DealofDay = () => {
  // Product data for the card slider
  const renderDots = () => {
    return products.map((_, index) => (
      <div
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      ></div>
    ));
  };

  const products = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXGISa8gq1uVjqgHdxjiTJKQSRiy1XyH-e6FTj5kOrKjZ2Re2VXAZZzs7eWUvJrAn9Bc&usqp=CAU',
      name: 'Nike Air Max 97',
      rating: 4.5,
      description:
        'An iconic fusion of style and comfort, turning heads with its sleek design, revolutionary cushioning, and timeless appeal.',
        currentPrice: '$149.99',
      oldPrice: '$169.99',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/1304528713/photo/red-jogging-sneakers-for-jogging-isolated-on-white-background-sport-shoes-modern-fashion.jpg?s=170667a&w=0&k=20&c=vJz0gd7EdSezWSm3rkRG316F7yecVxuXpVDcDL7Y6LI=',
      name: 'Vans Old Skool',
      rating: 3,
      description:
        ' A timeless classic that effortlessly blends retro style with modern comfort, making it a go-to choice for casual urban fashion.',
      currentPrice: '$125.99',
      oldPrice: '$155.99',
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=170667a&w=0&k=20&c=d8DXKBFX0B0BAd8xVQqBJflopjPgdwAzhaxZ7OF150s=',
      name: 'Adidas Stan Smith',
      rating: 3.5,
      description:
        ' A cultural icon and fashion staple, the legendary sneaker that bridges the gap between sportswear and streetwear with its minimalist design and unmatched versatility.',
      currentPrice: '$158.99',
      oldPrice: '$188.99',
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/51qygYpKX9L._UY535_.jpg',
      name: 'Puma Suede Classic',
      rating: 4,
      description:
        'An evergreen favorite, exuding retro coolness with its iconic suede upper and timeless design that effortlessly complements any casual ensemble.',
      currentPrice: '$147.99',
      oldPrice:' $177.99',
    },
    // Add other products as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer state and countdown logic
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
 

  // StarRating component
  const StarRating = ({ rating }) => {
    const MAX_STARS = 5;
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    const renderStar = (index) => {
      if (index < fullStars) {
        return <span className="dealofday--star dealofday--full" key={index}></span>;
      } else if (hasHalfStar && index === fullStars) {
        return <span className="dealofday--star dealofday--half" key={index}></span>;
      } else {
        return <span className="dealofday--star dealofday--empty" key={index}></span>;
      }
    };

    return (
      <div className="dealofday--star-rating">
        {[...Array(MAX_STARS)].map((_, index) => renderStar(index))}
        <span className="dealofday--rating-value">{roundedRating}</span>
      </div>
    );
  };



  const goToNextCard = () => {
   setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
 };

  return (
    <div className="dealofday--app">
      <div className="dealofday--card-slider">
        <div className="dealofday--slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product, index) => (
          <div
          className={`dealofday--card ${index === currentIndex ? 'active' : ''}`}
          key={product.id}
          onClick={goToNextCard}
          >

              <div className="dealofday--img_container">
                <img src={product.image} alt="" />
              </div>
              <div className="dealofday--details_container">
                <div className="dealofday--montserrat-container">
                <p className="dealofday--montserrat">Deal of The Day</p>
                </div>
                <div className="dealofday--promo-text">
            <span className="dealofday--flat-off">Flat 50% OFF</span>
            <span className="dealofday--first-order">ON YOUR FIRST ORDER</span>
        </div>
                <h1 className="dealofday--name">{product.name}</h1>
                <div className="dealofday--star-rating-container">
                  <StarRating rating={product.rating} />
                </div>
                <p className="dealofday--description">{product.description}</p>
                <div className="dealofday--price_container">
                  <h1 className="dealofday--current_price  dealofday--green-text"  >{product.currentPrice}</h1>
                  <p className="dealofday--old_price dealofday--green-text">{product.oldPrice}</p>
                </div>
            
                <button className="dealofday--btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dealofday--timer">
      <p ><strong>Hurry Up! Offer Ends in: {formatTime(countdown)}</strong></p>
      </div>
      <div className="dealofday--dots-container">{renderDots()}</div>
    </div>
  );
};

export default DealofDay;