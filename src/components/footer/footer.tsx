import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <p> &copy; {currentYear} Micael MOREIRA </p>
      <p> Réalisé avec React (et avec du ❤️ )</p>
      </div>
    </footer>
    );
}

export default Footer;