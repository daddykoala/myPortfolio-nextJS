import React, { useState, useEffect } from "react";
import styles from "@/styles/projet.module.scss";
import dataProjet from "../../data/dataProjet";
import devicon from "../../data/devicon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ProjetButton from "../services/projetButton";
import ProjetButtonIndispo from "../services/projetButtonIndispo";
// import 'swiper/element/css/navigation ';

function projet() {
  const [ref, inView] = useInView({
    triggerOnce: true, // L'animation sera déclenchée une seule fois
    threshold: 0.3, // L'animation sera déclenchée lorsque 10% de l'élément sera visible
  });
  //fonction pour rechercher le type de svg dans l'objet devicon
  function searchType(nameTech, devicon) {
    //je recupere dans devicon le bon objet
    const techObject = devicon.filter((icon) => nameTech === icon.name);
    if (nameTech == "hostinger") {
      const type = "/png/hostinger.svg";
      return type;
    } else {
      const type = techObject[0].versions.svg[0];

      return type;
    }
  }

  return (
    <section className={styles.projet} id="projet">
      <motion.div
        ref={ref}
        className={styles.projet__title}
        initial={{ opacity: 1, scaleX: 0, originX: 1 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            width={50}
            height={50}
            src="/png/fleche.png"
            alt="fleche"
          ></Image>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          // style={{ rotateY: 0 }}
        >
          Mes travaux.
        </motion.h1>
      </motion.div>

      <Swiper
        modules={[Autoplay]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {dataProjet.map((projet) => {
          return (
            <SwiperSlide>
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
            `,
                }}
              >
                {/* en tete avec langage de programation et logo du projet position absolute */}
                <div className={styles.projet__container__bglogo1}>
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${projet.langage}/${projet.langage}-original.svg`}
                    alt={projet.langage}
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.projet__container__bglogo2}>
                  <Image src={projet.src} width={200} height={200} />
                </div>
                {/* commence les div en display flex */}
                <div className={styles.projet__container__items}>
                  <h2 className={styles.projet__container__title}>
                    {projet.name}
                  </h2>
                  <aside>{projet.description}</aside>
                  <div className={styles.projet__container__git}>
                    {projet.link_github === "private" ? (
                      <div className={styles.projet__container__git__button}>
                        {" "}
                        code propriétaire{" "}
                      </div>
                    ) : (
                      <>
                        <a
                          className={styles.projet__container__git__button}
                          href={projet.link_github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repo Front
                        </a>
                        <a
                          className={styles.projet__container__git__button}
                          href={projet.link_github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repo Back
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.projet__container__items}>
                  <h3>Techno :</h3>
                  <div className={styles.projet__container__footer}>
                    <div className={styles.projet__container__footer__techno}>
                      {projet.techno.map((tech) => {
                        return (
                          <Image
                            key={tech.index}
                            src={
                              tech != "hostinger"
                                ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-${searchType(
                                    tech,
                                    devicon
                                  )}.svg`
                                : searchType(tech, devicon)
                            }
                            alt=""
                            width={40}
                            height={40}
                          />
                        );
                      })}
                    </div>
                    
                  </div>
                  
                </div>
                <div>
                {projet.link_web === "indisponible" ? (
                      <ProjetButtonIndispo color={projet.color1} />
                    ) : (
                      <ProjetButton link_web={projet.link_web} />
                    )}
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default projet;
