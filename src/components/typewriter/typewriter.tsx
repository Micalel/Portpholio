import React, { useState, useEffect } from "react";
import styles from "./typewriter.module.scss";

interface TypewriterProps {
  text: string;
  speed?: number;
  extraStyle?: React.CSSProperties;
  onFinish?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150, extraStyle, onFinish }) => {
  const [displayedText, setDisplayedText] = useState(``);
  const [index, setIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearInterval(typingInterval);
    } else {
      setIsTypingFinished(true);
      
      if (onFinish) {
        onFinish();

    }
  }
  }, [index, text, speed, onFinish]);

  return (
    <div className={styles.typewriterContainer} style={extraStyle}>
      <span className={styles.typewriterText}>{displayedText}</span>
      {!isTypingFinished &&<span className={styles.cursor}></span>}
      </div>
  );
};

export default Typewriter;
