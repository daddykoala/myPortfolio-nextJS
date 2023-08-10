
import React, { useState, useEffect } from "react";
import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

function contact() {
  return (
    <section>
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
        <Image src="/path_to_your_image.jpg" alt="Description de l'image" width={500} height={500} />
      </div>
      
      <div className={styles.contact__socials}>
        <a href="#" className={styles.contact__socials__icon}><img src="/path_to_facebook_icon.png" alt="Facebook" /></a>
        <a href="#" className={styles.contact__socials__icon}><img src="/path_to_twitter_icon.png" alt="Twitter" /></a>
        <a href="#" className={styles.contact__socials__icon}><img src="/path_to_instagram_icon.png" alt="Instagram" /></a>
        <!-- Ajoutez d'autres icônes de réseaux sociaux ici -->
      </div>
    </div>
  </div>
</section>

  )
}

export default contact