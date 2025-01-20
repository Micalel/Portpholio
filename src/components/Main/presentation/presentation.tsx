import React, { useState } from "react";
import Typewriter from "../../typewriter/typewriter";
import styles from "./presentation.module.scss";


interface PresentationProps {
  onFinish?: () => void;
}

const Presentation: React.FC<PresentationProps> = ({ onFinish }) => {
  const [isTypingFinished, setTypingFinished] = useState(false);

  const handleTypingFinish = () => {
    setTypingFinished(true);
    if (onFinish) onFinish();
  };

  return (
    <section
      className={`${styles.presentation} ${
        isTypingFinished ? styles.withBorder : ""
      }`}
    >
      <div className={styles.typewriterContainer}>
        <Typewriter
          text={"Hello! Moi c'est Micael. Ici, vous trouverez ce qui a un rapport de près ou de loin avec mon parcours dans le développement web."}
          speed={70}
          extraStyle={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#ffffff",
          }}
          onFinish={handleTypingFinish}
        />
      </div>
      
    {isTypingFinished && (
      <div className={styles.socialLinks}>
      <a 
        href="https://github.com/Micalel"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <img src="/assets/icones/icone-github.svg" alt="GitHub" />
      </a>
      <a 
        href="https://www.linkedin.com/in/micael-martins-moreira-086a16134/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <img src="/assets/icones/icone-linkdin.svg" alt="LinkedIn" />
      </a>
      </div>
    )} 
    </section>
  );
};

export default Presentation;
