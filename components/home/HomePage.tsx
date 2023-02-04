import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HomePage.module.scss";
import balloonYellow from "./images/yellowBalloon.svg";
import balloonOrange from "./images/orangeBalloon.svg";
import { Typewriter } from "react-simple-typewriter";
import largeCloud from "./images/largeCloud.svg";
import smallCloud from "./images/smallCloud.svg";
import truck from "./images/truck.svg";
import bigCar from "./images/bigCar.svg";

function HomePage() {
  const handleType = () => {
    console.log("hi");
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div id="landingPage" className={styles.landingPageContainer}>
      <section className={styles.aboutMeContainer}>
        <Image src={largeCloud} alt="cloud" id={styles.largeCloud} />
        <Image src={smallCloud} alt="cloud" id={styles.smallCloud} />
        <div className={styles.myNameContainer}></div>
        <div className={styles.balloonsContainer}>
          <Image
            src={balloonYellow}
            alt="yellowBalloon"
            id={styles.yellowBalloon}
          />
          <Image
            src={balloonOrange}
            alt="orangeBalloon"
            id={styles.orangeBalloon}
          />
        </div>
      </section>
      <section className={styles.grass}>
        <Image src={truck} alt="car" id={styles.truck} />
        {/* <Image src={bigCar} alt="bigCar" id={styles.bigCar} /> */}
        <div id={styles.triangle}></div>
      </section>
      <section className={styles.ground}></section>
    </div>
  );
}

export default HomePage;
