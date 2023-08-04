import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";
//IMAGE PARALLAX
import logoData from "../../data/logoData";
import ME from "../../public/png/imageprofil.png";
import INSTA from "../../public/png/halftone.png";
import REACT from "../../public/png/logo_react.png";
import DOCKER from "../../public/png/logo_docker.png";
import JS from "../../public/png/logo_js.png";
import NEXT from "../../public/png/logo_next.png";
import NODES from "../../public/png/logo_nodes.png";
import POSTGRES from "../../public/png/logo_postgres.png";
function About() {
  //leger parallax lorsqu'on scroole sur page je modifie selon la couche la vitesse de defilement.
  const screenWidth = useSelector((state) => state.screen.screenWidth);
  console.log(screenWidth);

  //je crée un objet image  standard pour mes logos 

//je crée un objet datalogo pour mieux mapper et la mainetance du code 



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const image1 = document.querySelector(
        "." + styles.about__profil__parallax1
      );
      const image2 = document.querySelector(
        "." + styles.about__profil__parallax2
      );
      const image3 = document.querySelector(
        "." + styles.about__profil__parallax3
      );
      image1.style.transform = "translateY(" + -scrollPosition * 0.2 + "px)";
      image2.style.transform = "translateY(" + -scrollPosition * 0.1 + "px)";
      image3.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container__about}>
      <div className={styles.about}>
        <div>
          <h2 className={styles.about__desc}>
            Développeur fullstack javascript
          </h2>
          <div className={styles.about__button}>
            <a
              href="public/png/CV_Clement_Moretti_FS.png"
              download
              className={styles.about__button__style}
            >
              cv
            </a>
            <Link className={styles.about__button__style} href="/">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div>
        {/* {logoData.map((logo, index) => (
        <Image
          key={index}
          className={styles[logo.className]}
          src={logo.src}
          alt={logo.alt}
          width={screenWidth > 1024 ? 90 : 60}
          height={screenWidth > 1024 ? 90 : 60}
        />
      ))} */}
        </div>
        <div className={styles.about__motivation}>
          <svg
            className={styles.about__cornereffectLeft1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
          </svg>
          
          <span>
            "Sérieux et motivé je saurai apporté le café tout les matins a tout"
          </span>
          <svg
            className={styles.about__cornereffectLeft2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
      <div className={styles.about__profil__parallax}>
        <Image
          className={styles.about__profil__parallax1}
          src={ME}
          alt="clement moretti"
          width={screenWidth > 1024 ? 450 : 425}
          height={screenWidth > 1024 ? 625 : 600}
        />

        <Image
          className={styles.about__profil__parallax2}
          src={INSTA}
          alt="insta"
          width={screenWidth > 1024 ? 450 : 350}
          height={screenWidth > 1024 ? 450 : 350}
        />
        
      </div>
    </section>
  );
}

export default About;
