import React, { useEffect, useState } from 'react';
import './Carousel.css';

const images = [
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/9.png',
  '/assets/images/10.png',
  '/assets/images/11.png',
  '/assets/images/12.png',
  '/assets/images/13.png',
  '/assets/images/14.png',
  '/assets/images/15.png',
  '/assets/images/16.png',
  '/assets/images/17.png',
  '/assets/images/18.png',
  '/assets/images/19.png',
  '/assets/images/20.png',
  '/assets/images/21.png',
  '/assets/images/22.png',
  '/assets/images/23.png',
  '/assets/images/24.png',
  '/assets/images/25.png',
  '/assets/images/26.png',
  '/assets/images/27.png',
  '/assets/images/28.png',
  '/assets/images/29.png',
  '/assets/images/30.png',
  '/assets/images/31.png',
  '/assets/images/32.png',
  '/assets/images/33.png',
  '/assets/images/34.png',
  '/assets/images/35.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-items"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
