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
      console.log(type, nameTech);
      return type;
    }
  }

  //je place un ecouteur d'evenement sur le scroll pour afficher le titre
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(false);
  //je passe mon scroll a true
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(true);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  //j'utilise le hooks useanimation()
  // useEffect(() => {
  //   if (scrollY) {
  //     controls.start({ opacity: 1, scaleX: 1 });
  //   } else {
  //     controls.start({ opacity: 1, scaleX: 0 });
  //   }
  // }, [scrollY, controls]);

  return (
    <section className={styles.projet} id="projet">
      <motion.div
        ref={ref}
        className={styles.projet__title}
        initial={{ opacity: 1, scaleX: 0, originX: 1 }} // Commencez avec une échelle horizontale de 0 et définissez le point d'origine à la droite
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
                  <Image src={projet.src} width={200} height={200} />
                </div>

                <h2 className={styles.projet__container__title}>
                  {projet.name}
                </h2>
                <aside>{projet.description}</aside>
                <div className={styles.projet__container__git}>
                  <a
                    className={styles.projet__container__git__button}
                    href={projet.link_github}
                    target="blank"
                  >
                    Repo Front
                  </a>
                  <a
                    className={styles.projet__container__git__button}
                    href={projet.link_github}
                  >
                    Repo Back
                  </a>
                </div>
                <h3>Techno :</h3>
                <div className={styles.projet__container__techno}>
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
                        width={50}
                        height={50}
                      />
                    );
                  })}
                </div>
                {/* <div className={styles.projet__container__link}>
                  <svg
                    className={styles.projet__container__link__corner1}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                  <svg
                    className={styles.projet__container__link__corner2}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                  <motion.a href={projet.link_web}
                 
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      onHoverStart={()=> setButtonContent('dddd')}   // Changement de contenu lors du survol
                      onHoverEnd={()=> setButtonContent('Visit')} 
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                        ease: [0.1, 0.71, 0.2, 1.01]
                      }}
                      className={styles.projet__container__link__button}
                    >
                     {buttonContent}
                  </motion.a>
                </div> */}

                <ProjetButton
                link_web={projet.link_web}/>

              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default projet;
