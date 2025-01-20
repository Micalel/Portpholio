import React, { useState } from "react";
import styles from "./project.module.scss";
import Carousel from "../../carousel/carousel";
import projectsData from "./projects.json"; 
import { Project } from "../../../models/projects";
import { Link } from "react-router-dom"; 

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData);

  return (
    <section className={styles.projects}>
      <h2>Mes projets</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Carousel showNavigation={false}>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} className={styles.imageContainer}>
                  <img src={image} alt={`${project.name} image ${imgIndex + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className={styles.skills}>
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Lien vers le Github
            </a>
            <Link
              to={`/project/${project.id}`}
              className={styles.projectLink}
            >
              Voir les détails  
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
