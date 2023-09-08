import React,{useEffect,useState} from 'react'
import styles from "@/styles/info.module.scss";
import { useGetUserProfileQuery } from '../../src/store/api/githubApi.js';




export default function info() {
const [mount,setMount]= useState(false)
useEffect(()=>{
  if (typeof window !=='undefined'){
  setMount(true)
  }
},[])
  //je m'assure de faire un rendu cote serveur
 const userData = useGetUserProfileQuery() 
 const stats = mount ? userData : {}





  return (
    <section className={styles.info}>
      {/* <div className={styles.info__features}>En cours de réalisations </div> */}
        <div className={styles.info__story}> animation framer motion</div>
        <div className={styles.info__statistique}> stats github
        </div>
        <div className={styles.info__projet}> swiper link project</div>
    </section>
  )
}
