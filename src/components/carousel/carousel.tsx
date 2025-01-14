import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";

interface CarouselProps {
  children: React.ReactNode[];
  showNavigation?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, showNavigation = true, autoSlideInterval = 3000, }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  useEffect(() => {
    if (autoSlideInterval) {
      const interval = setInterval(() => {
        handleNext();
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [autoSlideInterval, children.length]);

  return (
    <div className={styles.carousel}>
      {/* Slide container */}
      <div
        className={styles.carouselContainer}
        style={{
          transform: `translateX(calc(-100% * ${currentIndex}))`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className={styles.slide}>
            {child}
          </div>
        ))}
      </div>

      {/* Conditional buttons for slide */}
      {showNavigation && (
        <>
          <button className={styles.arrowLeft} onClick={handlePrev}>
            &#8592;
          </button>
          <button className={styles.arrowRight} onClick={handleNext}>
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
