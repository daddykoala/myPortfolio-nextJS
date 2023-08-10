
import React, { useState, useEffect } from "react";
import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import navbarData from "../../data/dataNavBar";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  
  return (
  <section id='contact' className={styles.contact}>
  <h1>Contact</h1>
  <div className={styles.contact__container}>
    <div className={styles.contact__container__items}>
      <form className={styles.contact__form}>
        <div className={styles.contact__form__group}>
          <label htmlFor="name" className={styles.contact__form__label}>Nom</label>
          <input type="text" id="name" className={styles.contact__form__input} placeholder="Votre nom" required />
        </div>
        
        <div className={styles.contact__form__group}>
          <label htmlFor="email" className={styles.contact__form__label}>Email</label>
          <input type="email" id="email" className={styles.contact__form__input} placeholder="Votre email" required />
        </div>
        
        <div className={styles.contact__form__group}>
          <label htmlFor="message" className={styles.contact__form__label}>Message</label>
          <textarea id="message" className={styles.contact__form__textarea} placeholder="Votre message" required></textarea>
        </div>

        <button type="submit" className={styles.contact__form__button}>Envoyer</button>
      </form>
    </div>

    <div className={styles.contact__container__items}>
      <div className={styles.contact__image}>
        <Image src="/png/mesmall.png" alt="Description de l'image" width={250} height={250} />
      </div>
      
      <div className={styles.contact__socials}>
      {
  navbarData.map((item) => 
    item.type === 'image'
      ? <a href={item.href} className={styles.contact__socials__icon}><Image src={item.src} alt={item.alt} width={50} height={50}/></a>
      : null
  )
}
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact