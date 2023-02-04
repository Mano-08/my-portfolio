import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HomePage.module.scss";
import balloonYellow from "./images/yellowBalloon.svg";
import balloonOrange from "./images/orangeBalloon.svg";
import largeCloud from "./images/largeCloud.svg";
import smallCloud from "./images/smallCloud.svg";
import truck from "./images/car.svg";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <div id="landingPage" className={styles.landingPageContainer}>
      <section className={styles.aboutMeContainer}>
        <Image src={largeCloud} alt="cloud" id={styles.largeCloud} />
        <Image src={smallCloud} alt="cloud" id={styles.smallCloud} />
        <div className={styles.myNameContainer}>
          <h1 id={styles.myName}>Hi, I{"'"}m Mano!</h1>
          <div id={styles.Iam}>
            <span style={{ color: "black" }}>{"I'm"}</span>
            <Typewriter
              options={{
                strings: [
                  "<span style='color: rgb(190, 14, 120);'>Happy to meet you!</span>",
                  "<span style='color: rgb(125, 29, 194);'>a Front-End Developer</span>",
                  "<span style='color: rgb(132, 82, 11);'>passionate about Technology</span>",
                  "<span style='color: rgb(160, 40, 100);'>a Computer Science Student</span>",
                ],
                skipAddStyles: true,
                cursor: "",
                delay: 50,
                deleteSpeed: 35,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
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
        <div id={styles.triangle}></div>
      </section>
      <section className={styles.ground}></section>
    </div>
  );
}

export default HomePage;
