import Image from "next/image"
import React from "react"
import AllRight from "../../asserts/AllRight.png"
import FB from "../../asserts/FB.svg"
import Pinterest from "../../asserts/Pinterest.svg"
import Instagram from "../../asserts/Instagram.svg"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.AllRight}>
        <Image src={AllRight} />
      </span>
      <span className={styles.masterHack}>Master Hack</span>
      <span className={styles.social}>
        <Image src={FB}/>
        <Image src={Pinterest}/>
        <Image src={Instagram} />
      </span>
    </footer>
  );
};

export default Footer;
