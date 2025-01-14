import React, { useState } from "react";
import styles from "./main.module.scss";
import Contact from "./contact/contact"
import Presentation from "./presentation/presentation"
import Project from "./project/project"
import Skills from "./skills/skill"


const MainContent: React.FC = () => {

    const [isPresentationFinished, setPresentationFinished] = useState(false);

    const handlePresentationFinish = () => {
        setPresentationFinished(true);
    };

    return (

<main className={styles.main}>
  <div className={styles.wrapper}>
    <section id="Présentation" className={styles.section}>
      <Presentation onFinish={handlePresentationFinish} />
    </section>
    {isPresentationFinished && (
      <>
        <section id="Compétences" className={`${styles.section} ${styles.fadeIn}`}>
          <Skills />
        </section>
        <section id="Projets" className={`${styles.section} ${styles.fadeIn}`}>
          <Project />
        </section>
        <section id="Contact" className={`${styles.section} ${styles.fadeIn}`}>
          <Contact />
        </section>
      </>
    )}
  </div>
</main>

    );
}

export default MainContent;