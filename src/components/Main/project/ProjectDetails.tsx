import React from "react";
import { useParams } from "react-router-dom"; 
import { Project } from "../../../models/projects"; 
import projectsData from "./projects.json"; 
import Carousel from "../../carousel/carousel";
import styles from "./projectDetails.module.scss";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const project: Project | undefined = id ? projectsData.find(p => p.id === parseInt(id, 10)) : undefined;

  if (!project) {
    return <p className={styles.error}>Projet non trouvé.</p>;
  }

  return (
    <section className={styles.projectDetails}>
    <div className={styles.container}>
      {/* Colonne gauche : Carousel */}
      <div className={styles.carouselSection}>
        <Carousel showNavigation={project.images.length > 1}>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.name} - Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
        </Carousel>
        {/* Tags sous le carrousel */}
        <div className={styles.tagsContainer}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.tag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
  
      {/* Colonne droite : Détails */}
      <div className={styles.detailsSection}>
        <h1 className={styles.projectName}>{project.name}</h1>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          Voir sur Github
        </a>
        <div className={styles.brief}>
          <h2>Brief du projet</h2>
          <p>{project.brief}</p>
        </div>
        <div className={styles.difficulties}>
          <h2>Les difficultés</h2>
          <p>{project.difficulties}</p>
        </div>
        <div className={styles.lessons}>
          <h2>Ce que j'en ai retiré</h2>
          <p>{project.lessonsLearned}</p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ProjectDetails;
