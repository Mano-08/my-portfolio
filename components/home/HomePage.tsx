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
  return <div id="landingPage" className={styles.landingPageContainer}></div>;
}

export default HomePage;
