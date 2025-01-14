import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Page non trouvée. Désolé, cette page n'existe pas.</p>
      <Link to="/" className={styles.homeLink}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
