import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import navbarData from "../../data/dataNavBar";
import Corner from "../design/corner";
import { motion } from "framer-motion";

export default function Header() {
  //je recupere la valeur de l'ecran
  const screenWidth = useSelector((state) => state.screen.screenWidth);
  const { bgColor, fontColor, bgColorNavBar } = useSelector(
    (state) => state.screen
  );

  //composant image reutilisable car toute les images de la meme taille.
  const MyImageComponent = ({ src, alt }) => (
    <Image src={src} alt={alt} width={30} height={30} />
  );

  //je crée une variable pour l'état du menu fals car fermé a l'uverture de l'app sur mobile
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu);
  };
  //framer motion pour le menu smartphone
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__item} ${styles.header__item1}`}
        style={{ background: bgColor, color: fontColor }}
      >
        <h1> Moretti Clément </h1>{" "}
        <Corner className={styles.header__cornereffectLeft} bgColor={bgColor} />
        <Corner
          className={styles.header__cornereffectLeft2}
          bgColor={bgColor}
        />
      </div>
      <Corner className={styles.header__cornereffectRight} bgColor={bgColor} />

      {screenWidth > 1024 ? (
        <>
          <div className={styles.header__item}>
            <nav>
              <ul className={styles.navbar}>
                {navbarData.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <li key={index} className={styles.navbar__items}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    );
                  } else if (item.type === "image") {
                    return (
                      <li key={index} className={styles.navbar__items}>
                        <Link href={item.href}>
                          <MyImageComponent src={item.src} alt={item.alt} />
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.header__item}> </div>{" "}
        </>
      ) : (
        <div className={styles.header__1024px}>
          {/* au click onouvre le menu et change le texte */}
          <>
            <h2 className={styles.header__button} onClick={handleOpenMenu}>
              {!openMenu ? "Menu" : "Close"}
            </h2>

            <ul
              className={`${styles.header__socials} ${
                openMenu ? styles.header__socials__open : ""
              }`}
            >
              {navbarData.map((link) =>
                link.type === "image" ? (
                  <li key={link.alt} className={styles.navbar__items}>
                    <Link href={link.href}>
                      <MyImageComponent src={link.src} alt={link.alt} />
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </>

          {/* a l'ouverture du menu la div apparait */}
          {openMenu ? (
            <>
              <div
                style={{
                  position: "fixed", // Fixed position
                  top: 0, // Start from the top
                  left: 0, // Start from the left
                  width: "100%", // Full width
                  height: "100vh", // Full viewport height
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Gray background with 50% opacity
                  zIndex: 100, // Make sure it covers other items
                }}
              ></div>
              {/* <Corner
                className={styles.navbarSmartphone__cornereffect__left}
                bgColor={bgColorNavBar}
              /> */}
              {/* <Corner
                className={styles.navbarSmartphone__cornereffect__right}
                bgColor={bgColorNavBar}
              /> */}

              <motion.nav
                className={styles.navbarSmartphone}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ originY: 0 }}
              >
                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {navbarData.map((link) =>
                    link.type === "link" ? (
                      <motion.li
                        key={link.alt}
                        variants={item}
                        className={styles.navbar__items}
                        onClick={handleOpenMenu}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </motion.li>
                    ) : null
                  )}
                </motion.ul>
              </motion.nav>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </header>
  );
}
