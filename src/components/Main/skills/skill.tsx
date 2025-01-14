import React from "react";
import styles from "./Skills.module.scss";
import iconMongo from "../../../assets/icones/icone-mongodb.svg";
import iconNode from "../../../assets/icones/icone-node.svg";
import iconVite from "../../../assets/icones/icone-vite.svg";
import iconReact from "../../../assets/icones/icone-react.svg";

const skills = [
  {
    name: "React.js",
    description:
      "Utilisant React.js comme principale bibliothèque front-end dans mes projets, et ça depuis mes débuts en développement web, je suis capable de créer des applications web modernes et réactives.",
    icon: iconReact,
  },
  {
    name: "Vite.js",
    description:
      "Ayant commencé à explorer le monde de Vite.js, j'ai pu acquérir les bases et je continue à m'améliorer dans l'utilisation de cet outil.",
    icon: iconVite, 
  },
  {
    name: "Node.js(Express.js)",
    description:
      "Utilisant Node.js pour mes projets back-end, je suis capable de créer des serveurs web et des API (principalement NoSQL) pour mes applications.",
    icon: iconNode, 
  },
  {
    name:"MongoDB",
    description:
      "Utilisant MongoDB pour mes projets back-end, je suis capable de créer des bases de données NoSQL pour mes applications.",
      icon: iconMongo,
  }

];

const Skills: React.FC = () => {
  return (
    <div className={styles.skills}>
      <h2>Je travailles le plus avec:</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div className={styles.skill} key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
