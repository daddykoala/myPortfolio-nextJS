
import React, { useRef } from "react";
import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import navbarData from "../../data/dataNavBar";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {e.preventDefault();
  console.log(form.current);
    emailjs.sendForm('service_hix04zk', 'template_32xxghg', form.current, '4SZ6ZUnbvRVNec90_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
  <section id='contact' className={styles.contact}>
  <h1>Contact</h1>
  <div className={styles.contact__container}>
    <div className={styles.contact__container__items}>
      <form ref={form} onSubmit={sendEmail}  className={styles.contact__form}>
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

        <button type="submit"  className={styles.contact__form__button}>Envoyer</button>
      </form>
    </div>

    <div className={styles.contact__container__items}>
      <div className={styles.contact__container__image}>
        <Image className={styles.contact__container__image__profil}src="/png/mesmall.png" alt="Description de l'image" width={250} height={300} />
        {
  navbarData.map((item) => 
    item.type === 'image'
      ? <a key={item.index} href={item.href} className={styles[`contact__container__image__icon__${item.label}`]}>

      <Image src={item.src} alt={item.alt} width={70} height={70}/></a>
      : null
  )
}
      </div>
      
      <div className={styles.contact__container__socials}>
      {/* {
  navbarData.map((item) => 
    item.type === 'image'
      ? <a key={item.index}href={item.href} className={styles.contact__container__socials__icon}><Image src={item.src} alt={item.alt} width={50} height={50}/></a>
      : null
  )
} */}
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact