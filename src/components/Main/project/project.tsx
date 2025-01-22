import React, { useState } from "react";
import styles from "./project.module.scss";
import Carousel from "../../carousel/carousel";
import projectsData from "./projects.json";
import { Project } from "../../../models/projects";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [expandedSkills, setExpandedSkills] = useState<number | null>(null);

  const toggleSkills = (index: number) => {
    setExpandedSkills((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.projects}>
      <h2>Mes projets</h2>
      <div className={styles.projectGrid}>
        {projectsData.map((project: Project, index: number) => (
          <div key={index} className={styles.project}>
            <h3>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.carouselContainer}>
              <Carousel showNavigation={false}>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className={styles.imageContainer}>
                    <img
                      src={image}
                      alt={`${project.name} image ${imgIndex + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className={styles.skills}>
              {project.skills
                .slice(0, expandedSkills === index ? project.skills.length : 3)
                .map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              {project.skills.length > 3 && expandedSkills !== index && (
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleSkills(index)}
                  aria-label="Voir plus"
                >
                  +
                </button>
              )}
            </div>
            <div className={styles.buttonContainer}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
