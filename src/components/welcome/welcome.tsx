import React, { useState } from 'react';
import styles from './welcome.module.scss';

interface WelcomeProps {
  onClick: () => void; // callback to handle the click 
  isFading: boolean; // indicates if the component is fading out
}

const Welcome: React.FC<WelcomeProps> = ({ onClick }) => {
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true); // Activates the fade-out animation
    onClick();         // calls the callback to handle the click event
  };

  return (
    <div
      className={`${styles.welcome} ${isFading ? styles['fade-out'] : ''}`}
      onClick={handleClick}
    >
      <h1>Bienvenue</h1>
    </div>
  );
};

export default Welcome;
