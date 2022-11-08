import Image from 'next/image'
import React from 'react'
import HomeView from '../components/Home';
import Landing from '../components/Landing/Landing';
import { Footer } from '../components/Layouts/Footer';
import styles from '../styles/Home.module.css'
import { getCookie, setCookie } from '../utilities/cookieProvider'


export default function Home() {
  const [landing, setLanding] = React.useState(true);

  React.useEffect(() => {
    if (getCookie("landing") === "do not land") {
      setLanding(false)
    } else {
      setLanding(true);
    }
  }, [setLanding])

  return (
    <div className={styles.container}>
      {landing ? <Landing styles={styles} /> : 
      <HomeView styles={styles} /> }
      
      <Footer />
    </div>
  )
}
