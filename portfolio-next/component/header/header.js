import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

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
      <h1 className={styles.header__item}> Moretti Clément </h1>{" "}
      <svg
        className={styles.header__cornereffect}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#ffffff">
          {" "}
        </path>{" "}
      </svg>{" "}
      {screenWidth > 1024 ? (
        <>
          <div className={styles.header__item}>
            <nav>
              <ul className={styles.navbar}>
                <li className={styles.navbar__items}>
                  <Link href="/">Contact</Link>
                </li>
                <li className={styles.navbar__items}>
                  <Link href="/">Projets</Link>
                </li>
                <li className={styles.navbar__items}>
                  <Link href="/">A propos</Link>
                </li>
                <li className={styles.navbar__items}>
                  <Link href="/">Projets</Link>
                </li>
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/linkedin.png"
                    alt="logo linkedin"
                  />
                </li>
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/wattsapp.png"
                    alt="logo wattsapp"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.header__item}> s </div>{" "}
        </>
      ) : (
        <div className={styles.header__1024px}>
          {/* au click onouvre le menu et change le texte */}
          {!openMenu ? (
            <>
              <h2
                className={`${styles.header__button}`}
                onClick={handleOpenMenu}
              >
                Menu{" "}
              </h2>
              <ul className={styles.header__socials}>
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/wattsapp.png"
                    alt="logo wattsapp"
                  />
                </li>
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/linkedin.png"
                    alt="logo linkedin"
                  />
                </li>
              </ul>
            </>
          ) : (
            <>
              <h2
                className={`${styles.header__button} `}
                onClick={handleOpenMenu}
              >
                Close{" "}
              </h2>
              <ul
                className={`${styles.header__socials} ${styles.header__socials__open}`}
              >
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/wattsapp.png"
                    alt="logo wattsapp"
                  />
                </li>
                <li className={styles.navbar__items}>
                  <MyImageComponent
                    src="/png/linkedin.png"
                    alt="logo linkedin"
                  />
                </li>
              </ul>
            </>
          )}

          {/* a l'ouverture du menu la div apparait */}
          {openMenu ? (
            <>
              <svg
                className={styles.navbarSmartphone__cornereffect__left }
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
                  <li>
                    <Link href="/">Projets</Link>
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
