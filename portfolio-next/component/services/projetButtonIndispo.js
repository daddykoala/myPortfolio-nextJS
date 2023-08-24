import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/projet.module.scss";

export default function projetButtonIndispo({color}) {
  //fonction qui change le contenu du buutton de projet au survol
  const [buttonContent, setButtonContent] = useState("Visit");

  return (
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
      <motion.div
      // href={link_web}
      initial={{ rotate: 0 ,backgroundColor:"black"}}
      whileHover={{ rotate: 360,backgroundColor:color}}
      onHoverStart={() => {
        setTimeout(() => setButtonContent("Coming Soon"), 200);
      }}
      onHoverEnd={()=> setButtonContent("Visit")}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0.1, 0.71, 0.2, 1.01],
      }}
      className={styles.projet__container__link__button}
    >
      {buttonContent}
    </motion.div>
    </div>
  );
}
