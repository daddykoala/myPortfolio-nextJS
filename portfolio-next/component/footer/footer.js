import React from "react";
import styles from "@/styles/footer.module.scss";
import Image from "next/image";
import navbarData from "../../data/dataNavBar";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Corner from "../design/corner";
import { useSelector } from "react-redux";


export default function Footer() {
  const MyImageComponent = ({ src, alt }) => (
    <Image src={src} alt={alt} width={30} height={30} />
  );
  const { bgColor, fontColor, bgColor2 } = useSelector((state) => state.screen);
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer__item}>
        <h1 className={styles.footer__item__name}> Moretti Clément
        <Corner
        className={styles.footer__item__name__cornerTop}
        Color={bgColor}
        />
        <Corner
        className={styles.footer__item__name__cornerBottom}
        Color={bgColor}
        />
        </h1>
      </div>
      <div className={styles.footer__item}>
        <div className={styles.footer__item__column}>
          <h2>Lien Utiles</h2>
          <ul className={styles.footer__item__column__list}>
            {navbarData.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className={styles.footer__item__column__list__link}
                  >
                    {item.label}
                  </Link>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <div>
          <h2>Suivez-moi</h2>
          <ul className={styles.footer__item__column__list}>
            {navbarData.map((item, index) => {
              if (item.type === "image") {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className={styles.footer__item__column__list__image}
                  >
                    <MyImageComponent src={item.src} alt={item.alt} />
                  </Link>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
