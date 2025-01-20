import React from "react";
import styles from "./skillscards.module.scss";
import { SkillCardProps } from "../../../models/skillscards";

const SkillCard: React.FC<SkillCardProps> = ({ name, description, icon }) => {
  return (
    <div className={styles.skillCard}>
      <img src={icon} alt={`${name} icon`} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SkillCard;
