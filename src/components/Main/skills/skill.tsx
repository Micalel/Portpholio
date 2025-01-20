import React from "react";
import skillsData from "./skills.json";
import SkillCard from "./skillsCard";
import styles from "./skills.module.scss";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Je travaille le plus avec :</h2>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
