import React from 'react';
import styles from './welcome.module.scss';

interface WelcomeProps {
  onClick: () => void; 
  isFading: boolean; 
}

const Welcome: React.FC<WelcomeProps> = ({ onClick, isFading }) => {
  return (
    <div
      className={`${styles.welcome} ${isFading ? styles['fade-out'] : ''}`}
      onClick={onClick}
    >
      <h1>Bienvenue</h1>
    </div>
  );
};

export default Welcome;
