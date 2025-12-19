import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  {
    url: "/agri3c.webp",
    description: '',
  },
  {
    url: '/images2.webp',
    description: '',
  },
  {
    url: 'https://tokyotechie.com/images/agricultural_ai.jpg',
    description: '',
  },
  {
    url: 'https://i.ytimg.com/vi/A79Q9BQ_QmI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCigjJy1r8eEkiKiabN-CODFpUItQ',
    description: '',
  },
  {
    url: '/imsges1.png',
    description: '',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeIn(true);
    }, 100);
  };

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeIn(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={prevSlide}>❮</button>
      <img
        src={images[currentIndex].url}
        alt={`Slide ${currentIndex}`}
        className={`slider-image ${fadeIn ? 'fade-in' : ''}`}
      />
      <div className="image-description">
        {images[currentIndex].description}
      </div>
      <button className="nav-button right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;