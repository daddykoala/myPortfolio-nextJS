import React from "react";
import styles from "@/styles/projet.module.scss";
import dataProjet from "../../data/dataProjet";
import devicon from "../../data/devicon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/element/css/navigation ';


function projet() {
//fonction pour rechercher le type de svg dans l'objet devicon
function searchType (nameTech,devicon){
//je recupere dans devicon le bon objet
  const techObject = devicon.filter((icon) => (nameTech === icon.name))
  if (nameTech == 'hostinger'){
    const type = '/png/hostinger.svg'
    return type
  }else{

    const type = techObject[0].versions.svg[0]
    console.log(type,nameTech);
    return type
  }
}



  return (
    <section className={styles.projet}>

<Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  navigation
  spaceBetween={50}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: true 
  }}
  breakpoints={{
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    }
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
            width={200}
            height={200}
            />
            </div>

            <h2 className={styles.projet__title}>{projet.name}</h2>
            <aside>{projet.description}</aside>
            <div className={styles.projet__container__git}>
              <a className={styles.projet__container__git__button} href={projet.link_github} target="blank">Repo Front</a>
              <a className={styles.projet__container__git__button} href={projet.link_github}>Repo Back</a>
            </div>
            <h3>Techno :</h3>
            <div className={styles.projet__container__techno}>
            {projet.techno.map((tech) => {
              return (

                <Image
                  key={tech.index}
                  src={tech != 'hostinger' ?`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-${searchType(tech,devicon)}.svg`: searchType(tech,devicon) }
                  alt=""
                  width={50}
                  height={50}
                />
                
              );
            })}

            </div>
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
          </SwiperSlide>
        );
      })}
      </Swiper>
    </section>
  );
}

export default projet;
