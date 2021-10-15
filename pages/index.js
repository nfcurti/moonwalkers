import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, {useRef,  useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReactTooltip from 'react-tooltip';
import "swiper/css/effect-cards"
import SwiperCore, {
    EffectCards
  } from 'swiper';
  SwiperCore.use([EffectCards]);
import Countdown from 'react-countdown';

export default function Home() {
  const [menu, setMenu] = useState(true)
  const [blur, setBlur] = useState(false)
  const [tab, setTab] = useState(0)
  const [rightOpen, setRightOpen] = useState(false)
  const [wallet, setWallet] = useState('')
  const n = 15;
  const [userAddress, setUserAddress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [heroIndex, setHeroIndex] = useState(1);
  const [mintAmount, setMintAmount] = useState(1)

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>We're live!</p>;
    } else {
      // Render a countdown
      return <p className={styles.cd}>Time to launch: {days} days {hours} hs {minutes} min {seconds} sec</p>;
    }
  };


  const sleep = async( ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const galleryCount = async (thisHI) => {
    const _ = setTimeout(() => {
    
          setHeroIndex(thisHI + 1)

          galleryCount(thisHI == 7 ? 1 : thisHI + 1)
      }, 200);
    }

    useEffect(async()=>{
      galleryCount(1);
  }, [])



  return (<div className={styles.page}>
        
      <Head>
        <title>MoonwalkerFM</title>
        <meta name="description" content="MFM - 5,000 music adict Moonwalkers!!" />
        <link rel="icon" href="/demo4.jpg" />
      </Head>
      <nav className={styles.navbar}>
        <Fade delay={600}>
          <img src='/222 (1).svg'/>
        </Fade>
        <button className={styles.connect_button}>CONNECT</button>
      </nav>
        <div className={styles.csoon}>COMING SOON</div>
        <img className={styles.himg} src='/Rectangle.png'/>
            <Countdown date={1634601600000} renderer={renderer}/>
        <div className={styles.main}>
          <div className={styles.main_wrapper}>
            <h1>What is MoonwalkerFM</h1>
            <p>Lo-Fi Moonwalkers is the first NFT collection from MoonwalkerFM connecting Artists & Investors in a way never seen before. <br/>For the first time fans can be a part of the success of a song that they love in real time. </p>
            <br/>
            <p>Every NFT minted gets paired with a full-length Lo-Fi song from streaming platforms, as the seasons roll out. The NFT holders of these songs can take home up to 45 <span style={{fontFamily:'Inter'}}>%</span> streaming royalties.</p>
          </div>
          <img src={`/demo${heroIndex}.jpg`}/>
        </div>
        <div className={styles.about}>
          <p><b>But what are Moonwalkers?</b> <br/><br/>By nature they were an angry & unpleasant species. Fur-covered aliens from a distant galaxy. Always discontent & unsatisfied with their way of living… one day, a Millenia ago, an ancient tape was discovered. This tape contained a series of audio files which brought peace & serenity to the Moonwalkers. they called this music. Lo-Fi. This inspired them to work together to explore the universe to discover new music, to keep their world safe & to never return to the days of old...</p>
          <img src='/utility.png'/>
        </div>
        
        <div className={styles.main_gallery}>
          <img src={`/s${1}.png`}/>
          <img src={`/s${2}.png`}/>
          <img src={`/s${3}.png`}/>
          <img src={`/s${4}.png`}/>
          <img src={`/s${5}.png`}/>
          <img src={`/s${6}.png`}/>
        </div>
        <div className={styles.main_mint}>
          <h1>MINT YOUR OWN</h1>
          <p className={styles.main_mint_p}>There will be 5,000 Lo-fi Moonwalkers available to the public, each mint costing 0.06Ξ</p>
          <div >
        <p className={styles.main_mint_s} onClick={() => { 
          setMintAmount(mintAmount == 10 ? 10 : mintAmount+1) ;

        }}>+</p>
        <input type="text" value={`${mintAmount}`}/>
        <p className={styles.main_mint_s} onClick={() => { 
          setMintAmount(mintAmount == 0 ? 0 : mintAmount-1) ;

        }}>-</p>
      </div>
      <button className={styles.mint_button}> Mint {mintAmount} Moonwalkers!</button>
        </div>
        <img className={styles.benefit} src='/utility.svg'/>
        <div className={styles.roadmap}>
          <h1 className={styles.roadmap_header}>Roadmap</h1>
          <div className={styles.roadmap_wrapper}>
            <div className={styles.roadmap_wrapper_item}>
              <h1>0 <img src='/percentage.svg' width={20 } /> </h1>
              <p>Mint 100 NFTs for team, giveaways & prize pools!</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>20<img src='/percentage.svg' width={20 } /></h1>
              <p>Pay team & contributors</p><br/>
              <p>Moonwalker Ethereum Competition</p><br/>
              <p>Season Zero Preview</p><br/>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>40<img src='/percentage.svg' width={20 } /></h1>
              <p>Support Act Donation (5 <span style={{fontFamily:'Inter'}}>%</span>)</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>60<img src='/percentage.svg' width={20 } /></h1>
              <p>Artist Discovery Project Announced (For Season One)</p><br/>
              <p>Season Zero date announced</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>80<img src='/percentage.svg' width={20 } /></h1>
              <p>MoonwalkerFM Merch Announcement <span style={{fontFamily:'Inter'}}>/</span> Drop date</p><br/>
              <p>MWFM 24 <span style={{fontFamily:'Inter'}}>/</span> 7 YT Channel launch</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>100<img src='/percentage.svg' width={20 } /></h1>
              <p>Live Discord Q&A with team</p><br/>
              <p>Moonwalker Ethereum Competition</p><br/>
              <p>20 <span style={{fontFamily:'Inter'}}>%</span> Net revenue put aside for Season Zero Marketing</p><br/>
              <p>Support Act Donation (5 <span style={{fontFamily:'Inter'}}>%</span>)</p><br/>
              <p>Rarity Sniper Listing</p>
            </div>
          </div>
          <br/>
          <h1 style={{margin:'0'}} className={styles.roadmap_header}>Post-launch</h1>
          <div className={styles.roadmap_wrapper}>
            <div className={styles.roadmap_wrapper_item}>
              <h1>Q4 2021</h1>
              <p>Season Zero Release</p><br/>
              <p>A Christmas Treasure Hunt</p><br/>
              <p>Spaceships</p><br/>
              <p>Large marketing push</p><br/>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>Q1 2022</h1>
              <p>Season One Announcement & Release</p><br/>
              <p>Big Merch Drop</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>Q2 2022</h1>
              <p>Season Three & Four Announcement & Release</p><br/>
              <p>MoonwalkerFM Online Music Festival</p>
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>Q3 2022</h1>
              <p>Season Five & Six Announcement & Release</p><br/>
              
            </div>
            <div className={styles.roadmap_wrapper_item}>
              <h1>Q4 2022</h1>
              <p>Moonwalker Fight Club (Game) Announcement</p><br/>
              <p>Season Seven & Eight Announcement & Release</p><br/>
            </div>
          </div>

        </div>
        <div className={styles.team}>
          <h1>Team</h1>
          <div className={styles.team_wrapper}>
            <div className={styles.team_item}>
              <img src='/Leonardo.jpg'/>
              <h3>@CameronTheMoonwalker</h3>
              <p>Founder & Project Lead</p>
            </div>
            <div className={styles.team_item}>
              <img src='/demo7.jpg'/>
              <h3>@SkuseTheMoonwalker</h3>
              <p>Co-Founder & Marketing</p>
            </div>
            <div className={styles.team_item}>
              <img src='/Variation 8.jpg'/>
              <h3>@JelmerTheMoonwalker</h3>
              <p>Music Promotion & Playlist Lead</p>
            </div>
            <div className={styles.team_item}>
              <img src='/Variation 9.jpg'/>
              <h3>@NicoC</h3>
              <p>Tech Lead</p>
            </div>
            <div className={styles.team_item}>
              <img src='/Variation 10.jpg'/>
              <h3>@vondoom</h3>
              <p>Marketing</p>
            </div>
            <div className={styles.team_item}>
              <img src='/Screen Shot 2021-09-24 at 8.00.41 pm.png'/>
              <h3>@OLLA</h3>
              <p>Marketing & Community Management</p>
            </div>
            <div className={styles.team_item}>
              <img src='/Screen Shot 2021-09-22 at 9.40.16 pm.png'/>
              <h3>@laura.the.artist</h3>
              <p>Artist</p>
            </div>
            <div className={styles.team_item}>
              <img src='/demo8.jpg'/>
              <h3>@Tiarna</h3>
              <p>Copywriter</p>
            </div>
          </div>
        </div>
    </div>
  )
}
