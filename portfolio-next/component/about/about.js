import React from 'react'
import styles from "@/styles/about.module.scss";
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <section className={styles.container__about}>
<div className={styles.about}>
  <div>

  <h2 className={styles.about__desc} >Développeur fullstack javascript</h2>
  <div className={styles.about__button}>
  <a href="public/png/CV_Clement_Moretti_FS.png" download className={styles.about__button__style}>
    cv
  </a>
  <Link className={styles.about__button__style} href="/">
    <span >Contact</span>
  </Link>
  </div>
</div>
<div className={styles.about__motivation} > 
<span>
"Sérieux et motivé je saurai apporté le café tout les matins a tout"
</span>
 </div>
</div>
<div>
  {/* <Image></Image>
  <Image></Image> */}
</div>
    </section>
  )
}

export default About