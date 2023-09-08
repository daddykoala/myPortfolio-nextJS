import React,{useEffect,useState} from 'react'
import styles from "@/styles/info.module.scss";
import { useGetUserProfileQuery ,useGetUserReposQuery ,useGetUserRepoCommitsQuery } from '../../src/store/api/githubApi.js';




export default function info() {
const [mount,setMount]= useState(false)
useEffect(()=>{
  if (typeof window !=='undefined'){
  setMount(true)
  }
},[])
  //je m'assure de faire un rendu cote serveur
 const userData = useGetUserProfileQuery() 
//  const reposData = useGetUserReposQuery()
// const commitsData = useGetUserRepoCommitsQuery({repo})
 const stats = mount ? userData.data : {}

 console.log(stats);





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
