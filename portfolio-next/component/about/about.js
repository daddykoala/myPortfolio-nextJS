import React ,{useEffect} from "react";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import ME from "../../public/png/imageprofil.png";
import INSTA from "../../public/png/instagram.png";
function About() {
//leger parallax lorsqu'on scroole sur page je modifie selon la couche la vitesse de defilement.

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const image1 = document.querySelector('.' + styles.about__profil__parallax1);
    const image2 = document.querySelector('.' + styles.about__profil__parallax2);
    image1.style.transform = 'translateY(' + (- scrollPosition * 0.2) + 'px)';
    image2.style.transform = 'translateY(' + (- scrollPosition * 0.1) + 'px)';
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
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
        <div className={styles.about__motivation}>
          <span>
            "Sérieux et motivé je saurai apporté le café tout les matins a tout"
          </span>
        </div>
      </div>
      <div className={styles.about__profil__parallax}>
        
          <Image className={styles.about__profil__parallax1} src={ME} alt="clement moretti" width={450} height={600} />
          <Image  className={styles.about__profil__parallax2} src={INSTA} alt="insta" width={500} height={500} />
        
      </div>
    </section>
  );
}

export default About;
