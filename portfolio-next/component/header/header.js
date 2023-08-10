import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import navbarData from "../../data/dataNavBar";

export default function Header() {
  //je recupere la valeur de l'ecran
  const screenWidth = useSelector((state) => state.screen.screenWidth);

  //composant image reutilisable car toute les images de la meme taille.
  const MyImageComponent = ({ src, alt }) => (
    <Image src={src} alt={alt} width={30} height={30} />
  );

  //je crée une variable pour l'état du menu fals car fermé a l'uverture de l'app sur mobile
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.header__item} ${styles.header__item1}`}>
        <h1> Moretti Clément </h1>{" "}
        <svg
          className={styles.header__cornereffectLeft}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
        </svg>
        <svg
          className={styles.header__cornereffectLeft2}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
        </svg>
      </div>
      <svg
        className={styles.header__cornereffectRight}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff"></path>
      </svg>

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
              <svg
                className={styles.navbarSmartphone__cornereffect__left}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                  fill="#ff8383"
                ></path>
              </svg>
              <svg
                className={styles.navbarSmartphone__cornereffect__right}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                  fill="#ff8383"
                ></path>
              </svg>

              <nav className={styles.navbarSmartphone}>
                <ul>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                  <li>
                    <Link href="/">Projets</Link>
                  </li>
                  <li>
                    <Link href="/">A propos</Link>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </header>
  );
}
