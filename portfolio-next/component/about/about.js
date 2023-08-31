import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";
//IMAGE PARALLAX
//je crée un objet datalogo pour mieux mapper et la mainetance du code
import logoData from "../../data/logoData";

import ME from "../../public/png/imageprofil.png";
import MESMALL from "../../public/png/mesmall1.png";
import INSTA from "../../public/png/halftone.png";
import Corner from "../design/corner";

function About() {
  //leger parallax lorsqu'on scroole sur page je modifie selon la couche la vitesse de defilement.
  const screenWidth = useSelector((state) => state.screen.screenWidth);
  const {bgColor,fontColor, bgColor2,fontColor2} = useSelector((state) => state.screen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const image1 = document.querySelector(
        "." + styles.about__profil__parallax1
      );
      const image2 = document.querySelector(
        "." + styles.about__profil__parallax2
      );
      // const image3 = document.querySelector(
      //   "." + styles.about__profil__parallax3
      // );
      image1.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
      image2.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
      // image3.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container__about} id="home" 
    // style={{ background: bgColor2, color: fontColor2}}
    >
      <div className={styles.about}>
        <div>
          <h2 className={styles.about__desc}>
            Développeur Fullstack Javascript
          </h2>
          <div className={styles.about__button}>
            <a
              href="/png/CV_Clement_Moretti_FS.png"
              download
              className={styles.about__button__style}
            >
              CV
            </a>
            <Link className={styles.about__button__style} href="/#contact">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div></div>
        <div className={styles.about__motivation}>
          <Corner
            className={styles.about__cornereffectLeft1}
            bgColor={bgColor}
          />
          <Corner
            className={styles.about__cornereffectLeft2}
            bgColor={bgColor}
          />

          <span>
         " Prêt à relever de nouveaux défis avec sérieux et enthousiasme."
          </span>
        </div>
      </div>
      <div className={styles.about__profil__parallax}>
        <Image
          className={styles.about__profil__parallax1}
          src={MESMALL}
          alt="clement moretti"
          width={screenWidth > 1024 ? 575 : 400}
          height={screenWidth > 1024 ? 575 : 400}
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
