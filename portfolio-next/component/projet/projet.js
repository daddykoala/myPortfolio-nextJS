import React from "react";
import styles from "@/styles/projet.module.scss";
import dataProjet from "../../data/dataProjet";
import devicon from "../../data/devicon";
import Image from "next/image";
import Link from "next/link";

function projet() {
  return (
    <section className={styles.projet}>
      {dataProjet.map((projet) => {
        return (
          <article
          key={projet.index}
          className={styles.projet__container}
          style={{
            backgroundImage: `
              radial-gradient(circle at 40% 91%, rgba(251, 251, 251, 0.04) 0%, rgba(251, 251, 251, 0.04) 50%, rgba(229, 229, 229, 0.04) 50%, rgba(229, 229, 229, 0.04) 100%),
              radial-gradient(circle at 66% 97%, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 50%, rgba(46, 46, 46, 0.04) 50%, rgba(46, 46, 46, 0.04) 100%),
              radial-gradient(circle at 86% 7%, rgba(40, 40, 40, 0.04) 0%, rgba(40, 40, 40, 0.04) 50%, rgba(200, 200, 200, 0.04) 50%, rgba(200, 200, 200, 0.04) 100%),
              radial-gradient(circle at 15% 16%, rgba(99, 99, 99, 0.04) 0%, rgba(99, 99, 99, 0.04) 50%, rgba(45, 45, 45, 0.04) 50%, rgba(45, 45, 45, 0.04) 100%),
              radial-gradient(circle at 75% 99%, rgba(243, 243, 243, 0.04) 0%, rgba(243, 243, 243, 0.04) 50%, rgba(37, 37, 37, 0.04) 50%, rgba(37, 37, 37, 0.04) 100%),
              linear-gradient(90deg, ${projet.color1}, ${projet.color2})
            `
          }}
        >
            {/* en tete avec langage de programation et logo du projet  */}
            <div className={styles.projet__container__bglogo1}>
            <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${projet.langage}/${projet.langage}-original.svg`}
            alt={projet.langage}
            width={100}
            height={100}
            />

            </div>
            <div className={styles.projet__container__bglogo2}>
            <Image
            src={projet.src}
            width={300}
            height={300}
            />
            </div>

            <h2 className={styles.projet__title}>{projet.name}</h2>
            <aside>{projet.description}</aside>
            <div className={styles.projet__container__git}>
              <a className={styles.projet__container__git__button} href={projet.link_github} target="blank">repo front</a>
              <a className={styles.projet__container__git__button} href={projet.link_github}>repo back</a>
            </div>
            <div></div>
            <h3>Techno :</h3>
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
            <div className={styles.projet__container__link}>

            <svg
            className={styles.projet__container__link__corner1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
          </svg>
          <svg
            className={styles.projet__container__link__corner2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
          </svg>
            <Link href={projet.link_web}  className={styles.projet__container__link__button} >Visit
            </Link>

            </div>
          </article>
        );
      })}
    </section>
  );
}

export default projet;
