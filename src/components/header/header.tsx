import React from "react";
import styles from "./header.module.scss";



const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
      <div className={styles.homeIcon}>
          <a href="/#">
            <img src="/assets/icones/icone-home.svg" alt="Accueil" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/#Présentation">Présentation</a>
          </li>
          <li>
            <a href="/#Compétences">Fiche de compétence</a>
          </li>
          <li>
            <a href="/#Projets">Mes projets</a>
          </li>
          <li>
            <a href="/#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
