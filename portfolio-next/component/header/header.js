import React from 'react'
import styles from '@/styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.header__item} >
            Moretti Clément</h1>
            <svg  className={styles.header__cornereffect}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path></svg>
        <div className={styles.header__item}>
            <navbar className={styles.navbar}>
                <nav className={styles.navbar__items}>Contact</nav>
                <nav className={styles.navbar__items}>Projets</nav>
                <nav className={styles.navbar__items}>A propos</nav>
                
            </navbar>
        </div>
        <div className={styles.header__item}>s</div>
    </header>
    
  )
}
