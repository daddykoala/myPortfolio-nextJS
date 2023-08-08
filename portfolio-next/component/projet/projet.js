import React from "react";
import styles from "@/styles/projet.module.scss";
import dataProjet from "../../data/dataProjet";
import devicon from "../../data/devicon";
import Image from "next/image";

function projet() {
  return (
    <section className={styles.projet}>
      {dataProjet.map((projet) => {
        return (
          <div key={projet.index} className={styles.projet__container}>
            <h2 className={styles.projet__title}>{projet.name}</h2>
            <h3>{projet.description}</h3>
            <div className={styles.projet__container__git}>
              <a href={projet.link_github}>{projet.link_github}</a>
              <a href={projet.link_github}>{projet.link_github_back}</a>
            </div>
            <div></div>
            {projet.techno.map((tech) => {
              return (
                <Image
                key={tech.index}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt=""
                  width={50}
                  height={50}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default projet;
