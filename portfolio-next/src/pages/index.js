import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { setWidth } from '@/store/slice/mediaSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//component
import Header from '../../component/header/header'
import About  from '../../component/about/about';
import Projet from '../../component/projet/projet';
import Info from '../../component/info/info';
import Contact from '../../component/contact/contact';
import Footer from '../../component/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
  return (
    <>
      <Head>
  <title>Moretti Clément Portfolio - Fullstack Developer</title>
  <meta name="description" content="Moretti Clément - Fullstack Developer basé à Villeneuve-Loubet, disponible pour des projets de Nice à Sophia Antipolis." />
  <meta name="keywords" content="Moretti Clément, Fullstack Developer, Développeur Fullstack, Villeneuve-Loubet, Nice, Sophia Antipolis, JavaScript, React, Node.js, Express, SQL, Frontend, Backend, Web Development, Développement Web" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header/>
        <div className={`${styles.home} `}>
        <About/>
        <Info/>
        </div>
          <Projet/>
          <Contact/>
          <Footer/>
          
        
        
      </main>
    </>
  )
}
