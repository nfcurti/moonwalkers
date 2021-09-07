import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

export default function Home(props) {
  const [menu, setMenu] = useState(false)
  const [tab, setTab] = useState(0)
  return (

  		<div className={styles.top_bar}>

            {props.tab!='4' ? <div className={styles.mint_total}>
                          <h1>777<span>AVAILABLE</span></h1>
                        </div> :
                        <a href='/'><img className={styles.close_button} src='/assets/Close Icon.svg'/></a>}
            <h1 className={styles.nav_title}>{props.title}</h1>
            {props.tab!='4' ?<button>CONNECT WALLET</button> :
                        ''}
          </div>

  	)}