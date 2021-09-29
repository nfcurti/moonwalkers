import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Fade } from "react-awesome-reveal";


export default function Header() {
  const [userAddress, setUserAddress] = useState('CONNECT');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);

  return (
    <nav className={styles.navbar}>
      <Fade delay={600}>
        <img src='/222 (1).svg'/>
      </Fade>
    	<button className={styles.connect_button}>CONNECT</button>
    </nav>
  )
}
